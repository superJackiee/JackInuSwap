import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@fastswap-uikit'
import BigNumber from 'bignumber.js'
import { Farm } from 'state/types'
import CardActionsContainer from './CardActionsContainer'

interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

export interface ExpandableSectionProps {
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  addLiquidityUrl?: string
  farm?: FarmWithStakedValue
  account?: string
}

const Wrapper = styled.div`
  padding: 9px 20px;
  background-color: white;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const Info = styled.div`
  width: 248px;
  @media (max-width: 1160px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  addLiquidityUrl,
  farm,
  account
}) => {
  const TranslateString = useI18n()

  return (
    <Wrapper>
      <Flex justifyContent="space-between" flexWrap="wrap" alignItems="center">
        <Info>
          <Flex justifyContent="space-between">
            <Text>{TranslateString(316, 'Stake')}:</Text>
            <StyledLinkExternal href={addLiquidityUrl}>{lpLabel}</StyledLinkExternal>
          </Flex>
          {!removed && (
            <Flex justifyContent="space-between">
              <Text>{TranslateString(737, 'Total Liquidity')}:</Text>
              <Text>{totalValueFormated}</Text>
            </Flex>
          )}
          <Flex justifyContent="flex-start">
            <Link external href={bscScanAddress} bold={false}>
              {TranslateString(356, 'View on BscScan')}
            </Link>
          </Flex>
        </Info>
        <CardActionsContainer farm={farm} account={account} addLiquidityUrl={addLiquidityUrl} />
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
