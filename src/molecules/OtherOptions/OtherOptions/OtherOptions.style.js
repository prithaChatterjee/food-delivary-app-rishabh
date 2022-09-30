import styled from 'styled-components'

export const StyleOtherOptions = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 25px;
    list-style-type: none;
    & > li {
        & > span{
            display: inline-block;
            width: 0.3rem;
            height: 0.3rem;
            background: rgb(130, 130, 130);
            border-radius: 50%;
            margin-right: 1rem;
        }
        & > a{
            margin-right: 1rem;
            color: rgb(130, 130, 130);
            text-decoration: none;
        }
    }
`