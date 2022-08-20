import React from 'react'
import styled from 'styled-components'
import { useMedia } from 'react-use'
import { Tag, Flex, Heading } from '@jackinu-uikit'
import { CommunityTag, CoreTag } from 'components/Tags'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
  isMobile?: boolean
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
  align-items: center;
  width: calc(100% - 505px);
  @media (max-width: 800px) {
    width: calc(100% - 205px);
  }
  @media (max-width: 430px) {
    min-width: calc(100% - 100px);
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  farmImage,
}) => {
  const coin1 = farmImage.split('-')[0]
  const coin2 = farmImage.split('-')[1].split('.')[0]
  return (
    <Wrapper justifyContent="flex-start">
      <div style={{ width: 40, height: 44 }}>
        <img src={`/images/tokens/${coin2}.png`} alt={coin2} width={25} height={25} style={{border:'1.5px solid #566FFE', borderRadius:20}} />
        <img src={`/images/tokens/${coin1}.png`} alt={coin1} width={30} height={30} style={{position: 'absolute', top: 23, left: 35, border:'1.5px solid #566FFE', borderRadius:20, background:'white'}} />
      </div>
      <div style={{ textAlign: 'left', paddingLeft: 8, width: 180, marginTop: 10 }}>
        <Heading mb="8px" ml="12px" style={{ fontWeight: 800, fontSize:18 }}>{lpLabel.replace('LP', '')}</Heading>
      </div>
    </Wrapper>
  )
}

export default CardHeading
