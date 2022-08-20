import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useMedia } from 'react-use'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import Cookies from 'js-cookie'
import useI18n from 'hooks/useI18n'
import { useWeb3React } from '@web3-react/core'
import { Heading, Text } from '@jackinu-uikit'
import { QuoteToken } from 'config/constants/types'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceCakeBusd, usePriceEthBusd, usePriceDukeBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmList, { FList } from './components/FasmList/FarmList'
import FarmTabButtons from './components/FarmTabButtons'
import Header from './components/header'



const Flex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    width: 100%;
    font-size: 18px !important; 
    :last-child {
      border-bottom-left-radius: 28px;
      border-bottom-right-radius: 28px;
    }
  }
`

const FarmListHeader = () => {
  const isMobile = useMedia('(max-width: 800px)')
  const isSmMobile = useMedia('(max-width:430px)')
  const wth = !isMobile ? 'calc(100% - 505px)' : isSmMobile ? 'calc(100% - 100px)' : 'calc(100% - 224px)';

  return (
    <FList style={{ height: 66, borderTopLeftRadius: 28, borderTopRightRadius: 28, alignItems: 'center' }}>
      <Text bold color="primary" style={{ minWidth: wth }}>Token Pair</Text>
      {!isSmMobile && <Text bold color="primary" style={{ width: 90 }}>Earned</Text>}
      <Text bold color="primary" style={{ width: 120 }}>APY</Text>
      {!isMobile && <>
        <Text bold color="primary" style={{ width: 150 }}>Liquidity</Text>
        <Text bold color="primary" style={{ width: 145 }}>Multiplier</Text>
      </>}
      {/* <Text bold color="primary" style={{width:130}}>Staked(MLP)</Text>
      <Text bold color="primary" style={{width:100}}>Rewards</Text> */}
    </FList>
  )
};

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const farmsLP = useFarms()
  const cakePrice = usePriceCakeBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account } = useWeb3React()
  const ethPriceUsd = usePriceEthBusd()
  // const fastPriceUsd = usePriceFastBusd()
  const dukePriceBusd = usePriceDukeBusd()

  const TranslateString = useI18n()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)
  const [filter, setFilter] = useState('')
  const [viewMode, setViewMode] = useState(!!Cookies.get('viewMode'))
  const [specialOnly, setSpecialOnly] = useState('all')

  let activeFarms = farmsLP.filter((farm) => farm.pid !== -1 && farm.multiplier !== '0X')
  if (filter !== '') {
    activeFarms = activeFarms.filter((farm) => farm.lpSymbol.indexOf(filter.toUpperCase()) !== -1)
  }
  let inactiveFarms = farmsLP.filter((farm) => farm.pid !== -1 && farm.multiplier === '0X')
  if (filter !== '') {
    inactiveFarms = inactiveFarms.filter((farm) => farm.lpSymbol.indexOf(filter.toUpperCase()) !== -1)
  }
  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  const dukeOnlyFarms = activeFarms.filter((farm) => farm.isSpecial === 'duke' || farm.isSpecial === 'both')
  const fastOnlyFarms = activeFarms.filter((farm) => farm.isSpecial === 'new' || farm.isSpecial === 'new')
  const oldFarms = activeFarms.filter((farm) => farm.isSpecial === 'no')

  // /! This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const cakeRewardPerYear = new BigNumber(farm.amountFastTokens).div(30).times(365)

        let apy;
        if (farm.quoteTokenSymbol === 'DUKE') {

          // In case of DUKE, Decimal is 9
          apy = dukePriceBusd
            .times(cakeRewardPerYear)
            .div(new BigNumber(farm.totalLiquidityWithoutPrice).times(cakePrice)).times(new BigNumber(10).pow(8))
        }
        else {

          apy = cakePrice
            .times(cakeRewardPerYear)
            .div(new BigNumber(farm.totalLiquidityWithoutPrice).times(bnbPrice))
        }
        return { ...farm, apy }
      })
        return farmsToDisplayWithAPY.filter(farm => farm.pid < 1).map((farm) => (
          <FarmCard
            key={farm.pid}
            farm={farm}
            removed={removed}
            bnbPrice={bnbPrice}
            cakePrice={cakePrice}
            ethPrice={ethPriceUsd}
            dukePrice={dukePriceBusd}
            account={account}
          />
        ))
    },
    [bnbPrice, ethPriceUsd, cakePrice, account],
  )

  return (
    <>
      <Header/>
    
      <Page>
        <div>
          <FlexLayout>
              <Route exact path={`${path}`}>
                {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(oldFarms, false)}
              </Route>
              <Route exact path={`${path}/history`}>
                {farmsList(inactiveFarms, true)}
              </Route>
          </FlexLayout> 

        </div>
      </Page>
    </>
  )
}

export default Farms
