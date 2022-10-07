import React from 'react'
import AddToCart from '../../Atoms/AddToCart'
import { BsArrowRightSquareFill } from "react-icons/bs";
import { StyleDishes } from '../Dishes/style.dishes'
import { StyleCartItem } from './Style.CartItem';

const CartItem = () => {
    return (
        <StyleDishes>
            <div>
                <div class="numbering">
                    <BsArrowRightSquareFill />
                </div>
                <div class="itemDetails">
                    <StyleCartItem>Chicken Biriyani</StyleCartItem>
                    <p>$400</p>
                </div>
            </div>
            <div>
                <AddToCart />
                <p>$400</p>
            </div>
        </StyleDishes>
    )
}

export default CartItem