import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Breadcrumbs from '../../../Atoms/Breadcrumbs'
import Container from '../../../Atoms/Container/Index'
import Heading from '../../../molecules/Heading/Innerpage'
import { StyleHeader } from './style.header'

const Header = () => {
    const location = useLocation()
    const city = new URLSearchParams(location.search).get('name')
    const category = new URLSearchParams(location.search).get('category')
    return (
        <StyleHeader>
            <Container>
                <Heading />
                <hr />
                <Breadcrumbs>
                    <Link to={"/"}>home</Link>
                    <span>{city}</span>
                    <span>{category}</span>
                </Breadcrumbs>
            </Container>
        </StyleHeader>
    )
}

export default Header