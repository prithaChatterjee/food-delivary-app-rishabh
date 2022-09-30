import styled from "styled-components";

export const StyleRating = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    background-color: ${props => {
        if (props.rate === 2.5) {
            return "yellow"
        } else if(props.rate < 2.5){
            return "red"
        }else{
            return "rgb(36, 150, 63)"
        }
    }};
    color: rgb(255, 255, 255);
    height: 1.5rem;
    padding: 0px 0.2rem;
    border-radius: 0.5rem;
    border: 1px solid rgb(36, 150, 63);
    max-width: 50px;
    font-size: 0.875rem;
`
