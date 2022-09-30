import styled from "styled-components";

export const StyleSearchItems = styled.div`
    width: 500px;
    max-width: 100%;
    border-radius: 10px;
    border: 1px solid rgb(205, 202, 202);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: text;
    &:focus-within {
        border: 2px solid rgb(205, 202, 202);
    }
    & > input{
        background-color: transparent;
        border: none;
        height: 100%;
        width: 100%;
        padding: 0.375rem 0.5rem;
        &:focus-visible{
            outline: none
        }
    }
    & >div.searchIcon{
        padding: 10px;
        font-size: 20px;
    }
`
