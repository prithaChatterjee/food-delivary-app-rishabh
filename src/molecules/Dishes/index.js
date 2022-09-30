import React from 'react'
import Rating from '../../Atoms/Rating'
import { BsFillRecordCircleFill } from "react-icons/bs";
import { StyleDishes } from './style.dishes';

const Dish = () => {
    return (
        <StyleDishes>
            <div className="numbering">
                <BsFillRecordCircleFill />
            </div>
            <div className="itemDetails">
                <h3>Paneer Lababdar</h3>
                <p>$500</p>
                <Rating rate={4.0} />
                <div>Cottage cheese cubes cooked in a freshly onion tomato masala gravy
                    finished
                    with cream.</div>
            </div>
        </StyleDishes>
    )
}

export default Dish