import React from 'react'

const TabDetails = ({ children, open, value}) => {
    if (value !== open) return
    return (
        <div>{children}</div>
    )
}

export default TabDetails