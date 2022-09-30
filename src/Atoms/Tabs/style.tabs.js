import styled from 'styled-components'

export const StyleTabs = styled.div`
    display: flex;
    flex-direction: ${props => props.vertical ? "row" : "column"};
    & > div{
        margin: ${props => props.vertical ? "0 20px" : "20px 0"}
    }
`
