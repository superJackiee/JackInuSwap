import styled from 'styled-components'

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & > * {
    min-width: 280px;
    max-width: 30.5%;
    width: 100%;
    margin: auto 12px;
    margin-top: 200px;
  }
`

export default FlexLayout
