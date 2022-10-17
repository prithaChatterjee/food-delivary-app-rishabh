import React, {useEffect} from 'react'
import Header from '../../organisms/Headers/InnerPage'
import UserCart from '../../Templates/UserCart'
import { useDispatch, useSelector } from 'react-redux';
import { getCart, handleCartRequest } from '../../Store/cart';

const Cart = () => {
  const { userReducer } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(handleCartRequest({url: `/cart/${userReducer.data._id}`, onSuccess: getCart.type}))
  }, [dispatch])
  
  return (
    <>
        <Header />
        <UserCart />
    </>
  )
}

export default Cart