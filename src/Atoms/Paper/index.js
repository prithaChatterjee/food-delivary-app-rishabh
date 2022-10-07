import React from 'react'
import StylePaper from './style.paper'

const Paper = ({children}) => {
    return (
        <StylePaper>
            {children}
        </StylePaper>
    )
}

export default Paper