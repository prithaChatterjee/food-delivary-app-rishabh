import React from 'react'
import Nav from '../../../molecules/Auth/nav'
import { StyleHeader } from './style.header'
import { useSelector } from "react-redux";
import AccountNav from '../../../molecules/AccountDetails/Nav';

const Header = () => {
    const { userReducer } = useSelector(state => state)
    return (
        <StyleHeader>
            {
                userReducer.data?._id ? <AccountNav  color={"#fff"} /> : <Nav />
            }
        </StyleHeader>
    )
}

export default Header