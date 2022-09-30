import React from 'react'
import Rating from '../../Atoms/Rating'
import { StyleRatingscount } from './style.ratingscount'

const RatingsCount = () => {
    return (
        <StyleRatingscount>
            <Rating rate={4.0} />
            <div className="review-about-count">
                <span className="count">229</span>
                <div className="category">Dining Reviews</div>
            </div>
        </StyleRatingscount>
    )
}

export default RatingsCount