import React from 'react'
import { Link } from 'react-router-dom'
import {StylelinkPrimary} from './linkPrimary.style'

export const LinkPrimary = ({children, style, to}) => {
    const {fontSize, fontWeight = "normal"} = style
    return (
        <Link style={StylelinkPrimary({fontSize, fontWeight})} to={to}>
            {children}</Link>
    )
}

export default LinkPrimary