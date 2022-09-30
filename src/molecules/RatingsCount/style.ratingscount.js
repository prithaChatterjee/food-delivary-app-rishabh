import styled from "styled-components";

export const StyleRatingscount = styled.div`
    display: flex;
    align-items: center;
    & > div{
        margin: 5px
    };
    & span.count{
        font-size: 14px;
        line-height: 1.1;
    };
    & div.category {
        color: rgb(129, 127, 127);
        text-transform: capitalize;
    }
`
