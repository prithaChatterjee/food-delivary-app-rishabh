import React from 'react'
import { useSelector } from 'react-redux'
import LocationItems from '../../molecules/locationItem'
import { Stylelocations } from './locations.style'

const Locations = () => {
    const {locationReducer} = useSelector(state => state)
    
    return (
        <Stylelocations>
            {locationReducer?.data?.map(res => <LocationItems key={res._id} name={res.name}
                to={`/resturents/${res._id}?name=${res.name}`} />
            )}
        </Stylelocations>
    )
}

export default Locations