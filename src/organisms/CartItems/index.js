import React from 'react'
import Button from '../../Atoms/button'
import Paper from '../../Atoms/Paper'
import CartItem from '../../molecules/CartItem'
import { StyleCartHead } from '../../molecules/CartItem/Style.CartItem'
import { useNavigate } from "react-router-dom";
import { StyleCartItems } from './Style.CartItems'

const CartItems = () => {
  const navigate = useNavigate()
  const handeAddMoreItem = () => navigate(`/resturent-details/63374a5cd8da1bfc830e5b89`)
  return (
    <StyleCartItems>
      <Paper>
        <StyleCartHead>Your Order</StyleCartHead>
        <CartItem />
        <CartItem />
        <Button fullWidth onClick={handeAddMoreItem}>Add more items</Button>
      </Paper>
      <Paper>
        <StyleCartHead>Bill Summery</StyleCartHead>
        <section>
          <div className='billSummery'>
            <p>Item Total</p>
            <p>$455.00</p>
          </div>
          <div className='billSummery'>
            <p>Restaurant delivery charges</p>
            <p>$45.00</p>
          </div>
          <div className='billSummery'>
            <p>Govt.taxes and resturant charges</p>
            <p>$5.00</p>
          </div>
        </section>
        <div className='grandTotal'>
          <p>Grand Total</p>
          <p>$5.00</p>
        </div>
      </Paper>
    </StyleCartItems>
  )
}

export default CartItems