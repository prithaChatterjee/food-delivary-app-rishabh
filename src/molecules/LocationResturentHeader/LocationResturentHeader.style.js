import styled from 'styled-components'

export const StyleLocationResturentHeader = styled.header`
    text-align: center;
    &>h1{
        font-size: 40px;
        font-weight: normal;
    }
    & >div.description{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1.5rem;
        &>p{
            margin: 0px;
            color: rgb(105, 105, 105);
            font-size: 1.3em;
            text-align: center;
            font-weight: normal;
            width: 40em;
        }
    }
`
