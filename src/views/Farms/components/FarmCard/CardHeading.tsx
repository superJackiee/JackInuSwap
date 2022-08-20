import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading } from '@jackinu-uikit'
import { CommunityTag, CoreTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  border: none;
  background: #e5894c;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
}) => {
  const coin1 = farmImage.split('-')[0]
  const coin2 = farmImage.split('-')[1].split('.')[0]
  return (
    <Wrapper justifyContent="space-between" alignItems="flex-start" mb="12px">
      <img src={`/images/tokens/${coin2}.png`} alt={coin2} width={28} height={28} style={{border:'1.5px solid #566FFE', borderRadius:20}} />
      <img src={`/images/tokens/${coin1}.png`} alt={coin1} width={36} height={36} style={{position: 'absolute', top: 40, left: 40, border:'1.5px solid #566FFE', borderRadius:20, background:'white'}} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading color='#d2793d' mb="4px">{lpLabel}</Heading>
        <Flex justifyContent="center">
          {/* {isCommunityFarm ? <CommunityTag /> : <CoreTag />} */}
          <MultiplierTag  variant="primary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
