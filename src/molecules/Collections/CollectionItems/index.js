import React from 'react'
import { Link } from 'react-router-dom'
import burger from '../../../assests/burger.jpg'
import { StyleCollectionItems } from './style.collectionItems'
import { IoMdArrowDropright } from "react-icons/io";

const CollectionItems = ({name, placeCount, route, img}) => {
    return (
        <StyleCollectionItems>
            <Link to={route}>
                <figure>
                    <img src={img} width="100%" height="100%" alt="" />
                    <figcaption>
                        <h3>{name}</h3>
                        <p>{placeCount} places <IoMdArrowDropright /></p>
                    </figcaption>
                </figure>
            </Link>
        </StyleCollectionItems>
    )
}

export default CollectionItems