import React from 'react'
import RatingsCount from '../../../molecules/RatingsCount'
import { StyleHeader } from './style.header'

const Header = () => {
    return (
        <StyleHeader>
            <div className="resturent-heading">
                <div className="nameRating">
                    <h1>Big Crust</h1>
                    <section className="ratingsCount">
                        <RatingsCount />
                        <RatingsCount />
                    </section>
                </div>
                <div className="resturent-basic-summery">
                    <p className="resturent-basic-food-summery">Pizza, Pasta, Shake, Desserts , foods</p>
                    <p className="resturent-basic-address-summery">Khandari, Agra</p>
                </div>
            </div>
        </StyleHeader>
    )
}

export default Header