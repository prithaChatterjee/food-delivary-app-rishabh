import React from 'react'
import { IconButton } from '../../button'
import { FaShoppingCart } from "react-icons/fa";
import { StyleItemcount } from './style.itemcount';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const ItemCount = (props) => {
    const { color = "#000" } = props
    const { cartReducer } = useSelector(state => state)
    const navigate = useNavigate()
    const handleRoute = () => navigate(`/cart`)
    return (
        <IconButton variant={"contained"} color={color} onClick={handleRoute}
            fontSize={"30px"}>
            <StyleItemcount>
                <FaShoppingCart />
                {
                    cartReducer?.data?.items?.length &&
                    <span>{cartReducer?.data?.items?.length}</span>
                }
            </StyleItemcount>
        </IconButton>
    )
}

export default ItemCount