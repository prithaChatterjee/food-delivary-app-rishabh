import React from 'react'
import { StyleHeader } from './style.header'
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <StyleHeader>
      <h1>Collections</h1>
      <div>
        <h4>Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends</h4>
        <Link to="./Public/burger.jpg">All collections in India <IoMdArrowDropright /></Link>
      </div>
    </StyleHeader>
  )
}

export default Header