import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../../../Atoms/Icon'
import SearchItems from '../../../Atoms/SearchItems'
import AccountNav from '../../AccountDetails/Nav'
import Nav from '../../Auth/nav'
import { StyleHeading } from './style.heading'
import { useSelector } from "react-redux";

const Heading = () => {
    const { userReducer } = useSelector(state => state)
    return (
        <StyleHeading>
            <Link to={`/`}>
                <Icon />
            </Link>
            <SearchItems />
            {
                userReducer.data?._id ? <AccountNav /> : <Nav />
            }
        </StyleHeading>
    )
}

export default Heading