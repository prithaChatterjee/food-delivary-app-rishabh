import React from 'react'
import Rating from '../../Atoms/Rating'
import { BsFillRecordCircleFill } from "react-icons/bs";
import { StyleDishes } from './style.dishes';
import AddToCart from '../../Atoms/AddToCart';

const Dish = (props) => {
    const { description, name, price, rating } = props
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
                <AddToCart number={0}/>
            </div>
        </StyleDishes>
    )
}

export default Dish