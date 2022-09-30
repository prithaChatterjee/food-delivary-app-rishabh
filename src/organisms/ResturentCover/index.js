import React from 'react'
import { Link } from 'react-router-dom'
import StyleResturentCoverPage from './style.ResturentCoverPage'
import burger from "../../assests/burger.jpg";
import CategoryRating from '../../molecules/CategoryRating';

const ResturentCover = () => {
    return (
        <StyleResturentCoverPage>
            <Link to={`/resturents/1`}>
                <figure>
                    <img src={burger} width="100%" height="100%" alt="burger" />
                    <figcaption>
                        <h3>Big Crust</h3>
                        <section className="ratingsBg">
                            <CategoryRating categoryName="Dinner" />
                            <div>|</div>
                            <CategoryRating categoryName="Dinner" />
                        </section>
                        <section>
                            <div className="food-items">Pizza, Pasta, Shake, Desserts , foods</div>
                            <p className='location'>Khandari, Agra</p>
                        </section>
                    </figcaption>
                </figure>
            </Link>
        </StyleResturentCoverPage>
    )
}

export default ResturentCover