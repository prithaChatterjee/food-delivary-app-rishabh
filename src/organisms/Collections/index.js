import React from 'react'
import CollectionItems from '../../molecules/Collections/CollectionItems'
import { StyleCollections } from './collections.style'
import burger from "../../assests/burger.jpg";
import dinning from "../../assests/dinning.jpg";
import buffet from "../../assests/buffet.jpg";
import pickup from "../../assests/pickup.jpg";

const Collections = () => {
    const collections = [
        {name: "Order online", placeCount: 26, route: "/", img: burger},
        {name: "Cafes", placeCount: 26, route: "/", img: dinning},
        {name: "Pubs", placeCount: 26, route: "/", img: buffet},
        {name: "Bars", placeCount: 26, route: "/", img: pickup}
    ]
  return (
    <StyleCollections>
        {
            collections.map(collection => <CollectionItems {...collection} />)
        }
    </StyleCollections>
  )
}

export default Collections