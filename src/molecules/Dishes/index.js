import React, { useState } from 'react'
import Rating from '../../Atoms/Rating'
import { BsFillRecordCircleFill } from "react-icons/bs";
import { StyleDishes } from './style.dishes';
import AddToCart from '../../Atoms/Cart/AddToCart';
import { useDispatch, useSelector } from 'react-redux';
import { createCart, handleCartRequest } from '../../Store/cart';

const subTotal = (arr) => arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue.total,
    0
)

const Dish = (props) => {
    const { description, name, price, rating, _id } = props
    const { userReducer, cartReducer} = useSelector(state => state)
    const dispatch = useDispatch()
    const quantity = cartReducer?.data?.items?.find(item => item.productId === _id)?.quantity || 0
    const handleCart = (add) => {
        console.log(quantity)
        const items = [{
            productId: _id,
            quantity: add ? quantity + 1 : quantity - 1,
            price,
            total: (quantity + 1) * price
        }]
        if (cartReducer?.data) {
            dispatch(handleCartRequest({
                url: `/cart`,
                method: "post", 
                onSuccess: createCart.type,
                data: {...cartReducer, items : [...cartReducer.data.items, items]}
            }))
        } else {
            dispatch(handleCartRequest({
                url: `/cart`,
                method: "post", 
                onSuccess: createCart.type,
                data: {
                    user: userReducer.data._id,
                    items,
                    subTotal: subTotal(items)
                }
            }))
        }
    }
    return (
        <StyleDishes>
            <div>
                <div className="numbering">
                    <BsFillRecordCircleFill />
                </div>
                <div className="itemDetails">
                    <h3>{name}</h3>
                    <p>${price}</p>
                    <Rating rate={rating} />
                    <div>{description}</div>
                </div>
            </div>
            <div>
                <AddToCart handleClick={handleCart} number={quantity} />
            </div>
        </StyleDishes>
    )
}

export default Dish