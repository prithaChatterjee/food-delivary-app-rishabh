import styled from "styled-components";

export const StyleItemcount = styled.div`
    position: relative;
    & > span{
        position: absolute;
        background-color: green;
        top: 0;
        right: 0;
        left: auto;
        color: white;
        margin-right: -10px;
        margin-top: -5px;
        padding: 0.2rem 0.4rem;
        font-size: 12px;
        border-radius: 15px;
    }
`
