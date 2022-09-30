import React from 'react'
import { H1 } from '../../Atoms/Typography'
import Dish from '../../molecules/Dishes'

const Dishes = () => {
    return (
        <article class="all-item-list">
            <div class="all-food-items">
                <section class="item-card">
                    <heading class="item-heading">
                        <H1 color="black">Recomanded</H1>
                    </heading>
                    <Dish />
                    <Dish />
                    <Dish />
                    <Dish />
                    <Dish />
                    <Dish />
                    <Dish />
                    <Dish />
                </section>
            </div>
        </article>
    )
}

export default Dishes 