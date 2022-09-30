import React from 'react'
import { AiFillStar} from 'react-icons/ai'
import { StyleRating } from './style.rating'

const Rating = ({rate}) => {
    return (
        <StyleRating rate={rate}>
            <AiFillStar />
            <span>{rate}</span>
        </StyleRating>
    )
}

export default Rating