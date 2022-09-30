import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
import LinkPrimary from '../../Atoms/linkPrimary'
import { LocationItem } from './locationitem.style'
const LocationItems = ({name, to}) => {
  return (
    <LocationItem>
      <LinkPrimary to={to} 
        style={{fontSize: "20px"}}>
        <div>
          <span>{name}</span>
          <span><BsArrowRightShort /></span>
        </div>
      </LinkPrimary>
    </LocationItem>
  )
}

export default LocationItems