import React from 'react'
import { Card, CardBody, Heading, Text } from '@fastswap-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          FAST Stats
        </Heading>
        <Row>
          <Text fontSize="14px">Total FAST Supply</Text>
          {cakeSupply && <CardValue fontSize="14px" value={cakeSupply} />}
        </Row>
        <Row>
          <Text fontSize="14px">Total FAST Burned</Text>
          <CardValue fontSize="14px" decimals={0} value={burnedBalance} />
        </Row>
        <Row>
          <Text fontSize="14px">New FAST/block</Text>
          <CardValue fontSize="14px" decimals={0} value={25} />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
