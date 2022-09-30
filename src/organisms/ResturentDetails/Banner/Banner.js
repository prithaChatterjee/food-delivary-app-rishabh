import React from 'react'
import { StyleBanner } from './style.banner'
import party from '../../../assests/party.jpg'
import burger from "../../../assests/burger.jpg";
import dinning from '../../../assests/dinning.jpg'
import buffet from "../../../assests/buffet.jpg";

const Banner = () => {
  return (
    <StyleBanner>
      <figure>
        <img src={party} height="100%" width="100%" alt="" />
      </figure>
      <figure>
        <img src={burger} height="100%" width="100%" alt="" />
      </figure>
      <figure>
        <img src={dinning} height="100%" width="100%" alt="" />
      </figure>
      <figure>
        <img src={buffet} height="100%" width="100%" alt="" />
      </figure>
      <figure>
        <img src={party} height="100%" width="100%" alt="" />
      </figure>
    </StyleBanner>
  )
}

export default Banner