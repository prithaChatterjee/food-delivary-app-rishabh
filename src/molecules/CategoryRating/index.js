import React from 'react'
import Rating from '../../Atoms/Rating'
import { StyleCategoryrating } from './style.categoryrating'

const CategoryRating = ({categoryName}) => {
    return (
        <StyleCategoryrating>
            <Rating />
            <span className="categoryName">{categoryName}</span>
        </StyleCategoryrating>
    )
}

export default CategoryRating