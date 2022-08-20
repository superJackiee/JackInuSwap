import React, { useState, useCallback } from 'react'
import { useMedia } from 'react-use'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider as ProviderType } from 'web3-core'
import { getAddress } from 'utils/addressHelpers'
import { getBep20Contract } from 'utils/contractHelpers'
import { Button, Flex, Text } from '@fastswap-uikit'
import { Farm } from 'state/types'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import useWeb3 from 'hooks/useWeb3'
import { useApprove } from 'hooks/useApprove'
import UnlockButton from 'components/UnlockButton'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'

const Action = styled.div`
  width: calc(100% - 300px);
  display: flex;
  justify-content: space-between;
  min-width: 562px;
  @media (max-width: 1160px) {
    min-width: 100%;
  }
  @media (max-width: 645px) {
    flex-wrap: wrap;
  }
`

const Rect = styled.div`
  border: 3px solid #536BF1;
  border-radius: 19px;
  min-width: 275px;
  padding: 12px 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  provider?: ProviderType
  account?: string
  addLiquidityUrl?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, account, addLiquidityUrl }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = getAddress(lpAddresses)
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)
  const isMedia = useMedia('(max-width: 645px)')
  const web3 = useWeb3()

  const lpContract = getBep20Contract(lpAddress, web3)

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (farm.isSpecial === 'duke' || farm.isSpecial === 'fast' || farm.isSpecial === 'both') ? (
      <Button width="100%" mt="8px">
        Coming Soon
        {/* {TranslateString(741, 'Coming Soon')} */}
      </Button>
    ) :
      (
        <Button mt="8px" width="100%" disabled={requestedApproval} onClick={handleApprove}>
          {TranslateString(741, 'Approve Contract')}
        </Button>
      )
  }

  return (
    <Action>
      <Rect style={{ margin: isMedia ? '0px 0px 10px 0px' : '0px 10px 0px 0px' }}>
        <Flex>
          <Text bold textTransform="uppercase" color="primary" fontSize="12px" pr="3px">
            {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
            JACK
          </Text>
          <Text bold textTransform="uppercase" color="primary" fontSize="12px">
            {TranslateString(743, 'Earned')}
          </Text>
        </Flex>
        <HarvestAction earnings={earnings} pid={pid} />
      </Rect>
      <Rect>
        <Flex>
          <Text bold textTransform="uppercase" color="primary" fontSize="12px" pr="3px">
            {lpName}
          </Text>
          <Text bold textTransform="uppercase" color="primary" fontSize="12px">
            {TranslateString(739, 'Staked')}
          </Text>
        </Flex>
        {!account ? <UnlockButton width="100%" mt="20px" /> : renderApprovalOrStakeButton()}
      </Rect>
    </Action>
  )
}

export default CardActions
