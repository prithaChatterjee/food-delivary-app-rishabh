import React from 'react'
import { StyleCard } from './card.style'

const Card = ({children}) => {
  return (
    <StyleCard>{children}</StyleCard>
  )
}

export default Card