import React from 'react'
import Container from '../../Atoms/Container/Index'
import LogoSearch from '../../organisms/Banner/Home'
import Header from '../../organisms/Headers/Home'
import StyleBanner from './style.banner'

const Banner = () => {
    return (
        <StyleBanner>
            <Container>
                <Header />
                <LogoSearch />
            </Container>
        </StyleBanner>
    )
}

export default Banner