import React from 'react'
import { Logo } from '../../../Atoms/Logo'
import SearchItems from '../../../Atoms/SearchItems'
import { H1 } from '../../../Atoms/Typography'
import { StyleLogoSearchItem } from './style.logosearchItem'

const LogoSearch = () => {
    return (
        <StyleLogoSearchItem>
            <Logo />
            <H1>Find the best restaurants, cafés and bars in India</H1>
            <SearchItems />
        </StyleLogoSearchItem>
    )
}

export default LogoSearch