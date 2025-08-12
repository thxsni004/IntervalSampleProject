import { Box, Button } from '@mui/material'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import {  decrement, increment } from '../../../redux/features/Cart';
import './CartButton.css'

const AfterCart = ({cartCount,productID}) => {

    const dispatch=useDispatch(); 
  return (
<Box className='after-cart' >
    <Button className='cart-counter-button'onClick={()=>dispatch(increment(productID))}  >+</Button>
    <Box className='cart-count' > {cartCount}</Box>
     <Button className='cart-counter-button' onClick={()=>dispatch(decrement(productID))}>-</Button>
</Box>
  )
}

export default AfterCart

