import React from 'react'
import { Button, StyleIconButton } from './button.style'

const Index = (props) => {
    const {children, variant, color, fontSize, onClick, type="button"} = props
    return (
        <Button type={type} variant={variant} color={color} fontSize={fontSize}
        onClick={onClick}>{children}</Button>
    )
}


export const IconButton = (props) => {
    const {children, onClick} = props
    return (
        <StyleIconButton variant="text" color='red' onClick={onClick}>{children}</StyleIconButton>
    )
}

export default Index