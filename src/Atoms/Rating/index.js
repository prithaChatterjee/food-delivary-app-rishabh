import React from 'react'
import { AiFillStar} from 'react-icons/ai'
import { StyleRating } from './style.rating'

const Rating = () => {
    return (
        <StyleRating>
            <AiFillStar />
            <span>4.0</span>
        </StyleRating>
    )
}

export default Rating