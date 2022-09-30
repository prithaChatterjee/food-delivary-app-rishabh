import React from 'react'
import Container from '../../Atoms/Container/Index'
import LocationResturentHeader from '../../molecules/LocationResturentHeader'
import Locations from '../../organisms/locations/Index'

const AllIndiaResturents = () => {
    return (
        <Container>
            <LocationResturentHeader />
            <Locations />
        </Container>
    )
}

export default AllIndiaResturents