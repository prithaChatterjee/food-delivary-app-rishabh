import styled from "styled-components";

export const StyleHeader = styled.header`
    position: sticky;
    top: 0;
    background-color: white;
    padding: 1rem 0;
    border-bottom: 1px solid black;
    & div.nameRating{
        display: flex;
        justify-content: space-between;
        & section.ratingsCount{
            display: flex;
            gap: 25px;
        }
    }
`
