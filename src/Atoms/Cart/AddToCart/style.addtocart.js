import styled from 'styled-components';

export const StyleAddToCart = styled.div`
    display: flex;
    gap: 10px;
    border-radius: 10px;
    background: red;
    color: #fff;
    padding: 0.2rem 0.5rem;
    & > button{
        cursor: pointer;
        background-color: transparent;
        color: #fff;
        border: none;
        font-size: 20px
    }
`;

export const StyleAddToCartWithOutIcon = styled.button`
    display: flex;
    gap: 10px;
    border-radius: 10px;
    background: red;
    color: #fff;
    padding: 0.375rem 0.75rem;
    border: none;
    font-size: 16px;
    cursor: pointer;
`;