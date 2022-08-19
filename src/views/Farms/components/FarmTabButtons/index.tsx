import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { Button, ButtonMenu, ButtonMenuItem, Input, Text, Toggle } from '@fastswap-uikit'
import useI18n from 'hooks/useI18n'
import Cookies from 'js-cookie'

const FarmTabButtons = ({ stakedOnly, setStakedOnly, setSpecialOnly, viewMode, setViewMode, filter, setFilter }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  const [index, setIndex] = useState(0);
  const handleClick = (newIndex) => setIndex(newIndex);
  
  useEffect(() => {
    if(index === 0){
      setSpecialOnly('all')
    }else if(index === 1){
      setSpecialOnly('duke')
    }else if(index === 2){
      setSpecialOnly('fast')
    }
  }, [index, setSpecialOnly])

  return (
    <Wrapper>
      <InnerFlex>
        <ToggleWrapper>
          <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} scale="sm" />
          <Text fontSize='22px'> {TranslateString(675, 'Staked only')}</Text>
        </ToggleWrapper>
        <div style={{maxHeight:'43px'}}>
          <ButtonMenu activeIndex={isExact ? 0 : 1} variant="primary" scale="sm">
            <ButtonMenuItem as={Link} to={`${url}`} style={{height:39,borderRadius:40}}>
              {TranslateString(698, 'Active')}
            </ButtonMenuItem>
            <ButtonMenuItem as={Link} to={`${url}/history`} style={{height:39,borderRadius:40}}>
              {TranslateString(700, 'Inactive')}
            </ButtonMenuItem>
          </ButtonMenu>
        </div>
      </InnerFlex>
      <InnerFlex>
        <Input
          id="search"
          name="search-card"
          type="text"
          placeholder={TranslateString(10011, 'Search')}
          style={{ maxWidth: 170, marginRight: 8 }}
          value={filter}
          onChange={(e) => setFilter(e.currentTarget.value)}
        // isWarning={error}
        // disabled={isloading}
        />
        <Flex style={{minWidth:58}}>
          <StyledButton onClick={() => {
            setViewMode(true)
            Cookies.set('viewMode', 'true')
          }} style={{ marginRight: 21, width:20, height:13 }}>
            {viewMode ?
              <img src="/images/icon-card-active.svg" alt="icon card" width="32px" height="32px" /> :
              <img src="/images/icon-card.svg" alt="icon card" width="32px" height="32px" />
            }
          </StyledButton>
          <StyledButton onClick={() => {
            setViewMode(false)
            Cookies.set('viewMode', 'false')
          }}
            style={{width:17, height:14}}
          >
            {viewMode ?
              <img src="/images/icon-list.svg" alt="icon list" width="32px" height="32px" /> :
              <img src="/images/icon-list-active.svg" alt="icon list" width="32px" height="32px" />
            }
          </StyledButton>
        </Flex>
      </InnerFlex>
      {/* <div style={{paddingLeft: '24px'}}>
        <ButtonMenu activeIndex={index} onItemClick={handleClick} variant="primary">
          <ButtonMenuItem>
            Old {TranslateString(674, 'Farms')}
          </ButtonMenuItem>
          <ButtonMenuItem>
            DUKE {TranslateString(674, 'Farms')}
          </ButtonMenuItem>
          <ButtonMenuItem>
            FAST {TranslateString(674, 'Farms')}
          </ButtonMenuItem>
        </ButtonMenu>
      </div> */}
      {/* <div style={{paddingLeft: '24px'}}>
        <ToggleWrapper>
          <Toggle checked={dukeOnly} onChange={() => setDukeOnly(!dukeOnly)} />
          <Text> DUKE {TranslateString(674, 'Farms')}</Text>
        </ToggleWrapper>
      </div>
      <div style={{paddingLeft: '24px'}}>
        <ToggleWrapper>
          <Toggle checked={fastOnly} onChange={() => setFastOnly(!fastOnly)} />
          <Text> FAST {TranslateString(674, 'Farms')}</Text>
        </ToggleWrapper>
      </div> */}
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  @media (max-width: 675px) {
    flex-wrap: wrap;
  }
`

const InnerFlex = styled.div`
  display: flex;
  @media (max-width: 675px) {
    min-width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const StyledButton = styled(Button)`
  padding: 0px 0px;
  width: 32px;
  height: 32px;
  background: transparent;
  box-shadow: none;
`