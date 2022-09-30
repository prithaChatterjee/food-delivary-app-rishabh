import React from 'react'
import Container from '../../Atoms/Container/Index'
import Header from '../../molecules/Collections/header/header'
import Collections from '../../organisms/Collections'
import { StyleAllCollections } from './allcollections.style'

const AllCollections = () => {
    return (
        <StyleAllCollections>
            <Container>
                <Header />
                <Collections /> 
            </Container>
        </StyleAllCollections>
    )
}

export default AllCollections