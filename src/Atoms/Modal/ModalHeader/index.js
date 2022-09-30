import React from 'react'
import { StyleModalheader } from './style.modalheader'
import { ImCross } from "react-icons/im";
import { IconButton } from '../../button';

const ModalHeader = ({heading, handleClose}) => {
    return (
        <StyleModalheader>
            <h1>{heading}</h1>
            <IconButton onClick={() => handleClose(false)}>
                <ImCross />
            </IconButton>
        </StyleModalheader>
    )
}

export default ModalHeader