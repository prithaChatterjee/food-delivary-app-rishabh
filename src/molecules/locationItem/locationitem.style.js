import styled from 'styled-components';

export const LocationItem = styled.li`
    & a{
        & > div {
            border: 1px solid rgb(232, 232, 232);
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: rgb(28 28 28 / 8%) 0px 1.42623px 2.85246px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &: hover{
                box-shadow: rgb(28 28 28 / 8%) 0px 4px 8px;
                color: red
            }
        }
    }
`;