import styled from "styled-components";

export const StyleCategories = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 10px;
    & > a > div: hover{
        transform: scale(1.05);
    }
`
