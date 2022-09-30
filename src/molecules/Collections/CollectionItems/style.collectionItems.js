import styled from "styled-components";

export const StyleCollectionItems = styled.div`
    width: 25%;
    padding: 5px;
    & > a {
        color: #ffffff;
        & > figure{
        position: relative;
        & > img {
            height: 20rem;
            width: 100%;
            border-radius: 10px;
        }
        & > figcaption {
            position: absolute;
            z-index: 9;
            bottom: 0;
            width: 100%;
            padding: 10px 15px;
        }
    }
    }
`
