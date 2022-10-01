import React from 'react'
import { useSelector } from 'react-redux'
import { H1 } from '../../Atoms/Typography'
import Dish from '../../molecules/Dishes'

const Dishes = () => {
    const {dishesReducer} = useSelector(state => state)
    return (
        <article className="all-item-list">
            <div className="all-food-items">
                <section className="item-card">
                    <heading className="item-heading">
                        <H1 color="black">Recomanded</H1>
                    </heading>
                    {
                        dishesReducer?.data?.map(res => <Dish key={res._id} {...res} />)
                    }
                </section>
            </div>
        </article>
    )
}

export default Dishes 