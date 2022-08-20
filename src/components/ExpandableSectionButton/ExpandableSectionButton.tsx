import React from 'react'
import styled from 'styled-components'
import { ChevronDownIcon, ChevronUpIcon, Text } from '@jackinu-uikit'

export interface ExpandableSectionButtonProps {
  onClick?: () => void
  expanded?: boolean
  noText?: boolean
}

const Wrapper = styled.div<{ noText: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${({noText}) => noText ? '72px' : '100%'}
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const ExpandableSectionButton: React.FC<ExpandableSectionButtonProps> = ({ onClick, expanded, noText=false }) => {
  return (
    <Wrapper aria-label="Hide or show expandable content" noText={noText}  role="button" onClick={() => onClick()}>
      {!noText && <Text color="#d2793d" bold>
        {expanded ? 'Hide' : 'Details'}
      </Text>}
      {expanded ? <ChevronUpIcon color='#d2793d' /> : <ChevronDownIcon color='#d2793d' />}
    </Wrapper>
  )
}

ExpandableSectionButton.defaultProps = {
  expanded: false,
}

export default ExpandableSectionButton
