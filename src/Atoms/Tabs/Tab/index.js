import React from 'react'
import styled from 'styled-components'


const StyleTab = styled.div`
    border: 1px solid rgb(232, 232, 232);
    border-radius: 10px;
`

const Tab = ({children}) => {
  return (
    <StyleTab>{children}</StyleTab>
  )
}

export default Tab