import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../Atoms/Icon'
import SearchItems from '../../../Atoms/SearchItems'
import Nav from '../../Auth/nav'
import { StyleHeading } from './style.heading'

const Heading = () => {
    return (
        <StyleHeading>
            <Link to={`/`}>
                <Icon />
            </Link>
            <SearchItems />
            <Nav />
        </StyleHeading>
    )
}

export default Heading