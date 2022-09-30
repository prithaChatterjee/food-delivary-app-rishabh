import React from 'react'
import Rating from '../../Atoms/Rating'
import { StyleCategoryrating } from './style.categoryrating'

const CategoryRating = (props) => {
    const {categoryName, rate} = props
    return (
        <StyleCategoryrating>
            <Rating rate={rate.toFixed(1)} />
            <span className="categoryName">{categoryName}</span>
        </StyleCategoryrating>
    )
}

export default CategoryRating