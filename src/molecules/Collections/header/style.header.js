import styled from 'styled-components'

export const StyleHeader = styled.header`
    & > h1{
        font-size: 2.5rem;
        line-height: 1.2;
        font-weight: 500;
        color: rgb(28, 28, 28);
        margin: 0
    }

    & > div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;

        & > h4{
            line-height: 1.4;
            font-weight: 300;
            color: rgb(54, 54, 54);
            font-weight: 400;
        }

        & > a{
            color: pink;
            text-decoration: none;
            font-weight: 500
        }
    }
`
