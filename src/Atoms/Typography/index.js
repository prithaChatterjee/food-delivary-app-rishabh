import React from 'react'
import { StyleH1 } from './style.Typography'

export const H1 = ({children, color}) => {
    return (
        <StyleH1 color={color}>{children}</StyleH1>
    )
}
