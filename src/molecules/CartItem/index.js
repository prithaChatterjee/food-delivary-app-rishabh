import React from 'react'
import AddToCart from '../../Atoms/Cart/AddToCart'
import { BsArrowRightSquareFill } from "react-icons/bs";
import { StyleDishes } from '../Dishes/style.dishes'
import { StyleCartItem } from './Style.CartItem';

const CartItem = (props) => {
    const {price, productId, quantity, total} = props
    return (
        <StyleDishes>
            <div>
                <div className="numbering">
                    <BsArrowRightSquareFill />
                </div>
                <div className="itemDetails">
                    <StyleCartItem>Chicken Biriyani</StyleCartItem>
                    <p>${price}</p>
                </div>
            </div>
            <div>
                <AddToCart number={quantity} />
                <p>${total}</p>
            </div>
        </StyleDishes>
    )
}

export default CartItem