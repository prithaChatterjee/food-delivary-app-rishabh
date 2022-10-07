import React from 'react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { StyleAddToCart, StyleAddToCartWithOutIcon } from './style.addtocart';

const AddToCart = ({ number, handleClick}) => {
    if (number > 0) {
        return (
            <StyleAddToCart>
                <button><AiOutlinePlusCircle /></button>
                <div>{number}</div>
                <button><AiOutlineMinusCircle /></button>
            </StyleAddToCart>
        )
    } else {
        return <StyleAddToCartWithOutIcon onClick={handleClick}>Add to Cart</StyleAddToCartWithOutIcon>
    }
}

export default AddToCart