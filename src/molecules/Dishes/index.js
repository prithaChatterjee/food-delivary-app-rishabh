import React, {useState} from 'react'
import Rating from '../../Atoms/Rating'
import { BsFillRecordCircleFill } from "react-icons/bs";
import { StyleDishes } from './style.dishes';
import AddToCart from '../../Atoms/AddToCart';
import { useDispatch, useSelector } from 'react-redux';
import { createCart } from '../../Store/cart';

const Dish = (props) => {
    const { description, name, price, rating, _id} = props
    const {userReducer} = useSelector(state => state)
    const dispatch = useDispatch()
    const [quantity, setquantity] = useState(0)
    const handleCart = () => dispatch(createCart({
        user: userReducer.data._id,
        items: [{
            productId: _id,
            quantity: quantity + 1,
            price,
            total: quantity * price
        }],
        subTotal: 200
    }))
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