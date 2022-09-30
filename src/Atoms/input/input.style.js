import styled from 'styled-components';

export const StyleInput = styled.div`
    width: ${props => props.fullWidth ? "auto" : "350px"};
    border: 1px solid ${props => props.value ? "green" : "#000"};
    position: relative;
    & > label{
        position: absolute;
        background: white;
        top: ${props => props.value && "-15px"};
        left: ${props => props.value && "10px"};
        padding: ${props => props.value ? "0px 5px" : "5px"};
        color: ${props => props.value ? "green" : "#000"};
    };
    & > input{
        width: -webkit-fill-available;
        border: none;
        padding: 0.5rem 0.75rem;
        outline: none
    }
    &:focus-within{
        border: 1px solid green;
        color: green;
        & > label{
           top: -15px;
           left: 10px;
           padding: 0px 5px
        };
    }
`;