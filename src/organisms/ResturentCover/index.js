import React from 'react'
import { Link } from 'react-router-dom'
import StyleResturentCoverPage from './style.ResturentCoverPage'
import burger from "../../assests/burger.jpg";
import CategoryRating from '../../molecules/CategoryRating';

const ResturentCover = (props) => {
    const {categories, name, location, _id} = props
    return (
        <StyleResturentCoverPage>
            <Link to={`/resturent-details/${_id}`}>
                <figure>
                    <img src={burger} width="100%" height="100%" alt="burger" />
                    <figcaption>
                        <h3>{name}</h3>
                        <section className="ratingsBg">
                            {
                                categories?.map(res => <CategoryRating key={res._id} rate={res.rating} 
                                    categoryName={res.category.name} />)
                            }
                        </section>
                        <section>
                            <div className="food-items">Pizza, Pasta, Shake, Desserts , foods</div>
                            <p className='location'>{location.address}, {location.city.name}</p>
                        </section>
                    </figcaption>
                </figure>
            </Link>
        </StyleResturentCoverPage>
    )
}

export default ResturentCover