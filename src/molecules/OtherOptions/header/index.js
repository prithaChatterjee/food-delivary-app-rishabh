import React from 'react'
import { StyleHeader } from './style.header'

const Header = (props) => {
    const {children} = props
    return (
        <StyleHeader>{children}</StyleHeader>
    )
}

export default Header