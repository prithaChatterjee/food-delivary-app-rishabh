import React from 'react'
import Rating from '../../Atoms/Rating'
import { BsFillRecordCircleFill } from "react-icons/bs";
import { StyleDishes } from './style.dishes';

const Dish = (props) => {
    const {description, name, price, rating} = props
    return (
        <StyleDishes>
            <div className="numbering">
                <BsFillRecordCircleFill />
            </div>
            <div className="itemDetails">
                <h3>{name}</h3>
                <p>${price}</p>
                <Rating rate={rating} />
                <div>{description}</div>
            </div>
        </StyleDishes>
    )
}

export default Dish