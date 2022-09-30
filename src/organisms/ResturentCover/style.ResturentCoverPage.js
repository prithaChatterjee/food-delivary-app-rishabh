import styled from "styled-components"

const StyleResturentCover = styled.div`
    width: 25%;
    padding: 10px;
    & > a{
        text-decoration: none;
        color: rgb(116, 114, 114);
        font-size: 14px;
        & > figure > img{
            height: 10rem;
            width: 100%;
            border-radius: 10px
        }
        & > figure > figcaption{
            position: relative;
            width: 100%;
            & h3{
                font-weight: 500;
                color: black;
                font-size: 20px;
            }
            & section.ratingsBg{
                position: relative;
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
            }
        }
    }
`

export default StyleResturentCover