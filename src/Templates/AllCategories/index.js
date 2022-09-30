import React from 'react'
import Container from '../../Atoms/Container/Index'
import Categories from '../../organisms/Categories'
import { StyleAllCategories } from './AllCategories.Style'

const AllCategories = () => {
    return (
        <StyleAllCategories>
            <Container>
                <Categories />
            </Container>
        </StyleAllCategories>
    )
}

export default AllCategories