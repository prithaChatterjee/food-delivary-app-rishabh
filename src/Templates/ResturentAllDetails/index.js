import React from 'react'
import Container from '../../Atoms/Container/Index'
import Dishes from '../../organisms/Dishes'
import Banner from '../../organisms/ResturentDetails/Banner/Banner'
import Header from '../../organisms/ResturentDetails/header'
import { StyleResturentAllDetails } from './style.ResturentAllDetails'

const ResturentAllDetails = () => {
    return (
        <StyleResturentAllDetails>
            <Container>
                <Banner />
                <Header />
                <Dishes />
            </Container>
        </StyleResturentAllDetails>
    )
}

export default ResturentAllDetails