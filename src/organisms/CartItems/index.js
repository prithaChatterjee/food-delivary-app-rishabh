import React, { useState } from 'react'
import Button from '../../Atoms/button'
import Paper from '../../Atoms/Paper'
import CartItem from '../../molecules/CartItem'
import { StyleCartHead } from '../../molecules/CartItem/Style.CartItem'
import { useNavigate } from "react-router-dom";
import { StyleCartItems } from './Style.CartItems'
import { useSelector } from 'react-redux'

const CartItems = () => {
  const navigate = useNavigate()
  const { cartReducer } = useSelector(state => state)
  const [delivaryCharges, setdelivaryCharges] = useState(10)
  const [tax, settax] = useState(35)
  const handeAddMoreItem = () => navigate(`/resturent-details/63374a5cd8da1bfc830e5b89`)
  return (
    <StyleCartItems>
      <Paper>
        {
          cartReducer?.data?.items?.length ?
            <StyleCartHead>Your Order</StyleCartHead> :
            <StyleCartHead>You have no items in your cart</StyleCartHead>
        }
        {
          cartReducer?.data?.items?.map(item => <CartItem {...item} key={item.productId} />)
        }
        <Button fullWidth onClick={handeAddMoreItem}>{
          cartReducer?.data?.items?.length ? `Add more items` : `Add Item`}
        </Button>
      </Paper>
      {
        cartReducer?.data?.items?.length &&
        <Paper>
          <StyleCartHead>Bill Summery</StyleCartHead>
          <section>
            <div className='billSummery'>
              <p>Item Total</p>
              <p>${cartReducer?.data?.subTotal}</p>
            </div>
            <div className='billSummery'>
              <p>Restaurant delivery charges</p>
              <p>${delivaryCharges}</p>
            </div>
            <div className='billSummery'>
              <p>Govt.taxes and resturant charges</p>
              <p>${tax}</p>
            </div>
          </section>
          <div className='grandTotal'>
            <p>Grand Total</p>
            <p>${cartReducer?.data?.subTotal + delivaryCharges + tax}</p>
          </div>
        </Paper>
      }
    </StyleCartItems>
  )
}

export default CartItems