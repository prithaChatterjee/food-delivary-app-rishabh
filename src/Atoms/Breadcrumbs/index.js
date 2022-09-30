import React from 'react'
import { StyleBreadcrumbs } from './style.breadcrumbs'

const Breadcrumbs = (props) => {
    const { children} = props
    return (
        <StyleBreadcrumbs {...props}>{children}</StyleBreadcrumbs>
    )
}

export default Breadcrumbs