import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Breadcrumbs from '../../../Atoms/Breadcrumbs'
import Container from '../../../Atoms/Container/Index'
import Heading from '../../../molecules/Heading/Innerpage'
import { StyleHeader } from './style.header'

const Header = () => {
    const param = useParams()
    const location = useLocation()
    console.log(param)
    const city = new URLSearchParams(location.search).get('name')
    return (
        <StyleHeader>
            <Container>
                <Heading />
                <hr />
                <Breadcrumbs>
                    <Link to={"/"}>home</Link>
                    <span>{city} Resturents</span>
                </Breadcrumbs>
            </Container>
        </StyleHeader>
    )
}

export default Header