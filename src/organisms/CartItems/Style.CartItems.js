import styled from "styled-components";

export const StyleCartItems = styled.section`
    & > div {
        margin-bottom: 20px;
        & div.billSummery {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            margin-bottom: 10px;
            &:not(:first-child){
                color: #9494b8;
            }
        };
        & div.grandTotal {
            display: flex;
            justify-content: space-between;
            border-top: 1px solid #9494b8;
            font-weight: bold;
            padding-top: 10px;
        }
    }
`
