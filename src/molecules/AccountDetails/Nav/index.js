import React from 'react'
import Button from "../../../Atoms/button/index";
import { StyleNav } from '../../Auth/nav/style.nav';
import ItemCount from '../../../Atoms/Cart/ItemCount';

const AccountNav = (props) => {
    const {color} = props
    return (
        <StyleNav>
            <ItemCount color={color} />
            <Button variant={"contained"} color={"green"}
                fontSize={"20px"}>Logout</Button>
        </StyleNav>
    )
}

export default AccountNav