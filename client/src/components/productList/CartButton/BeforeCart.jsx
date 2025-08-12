import { Button,Box } from '@mui/material'
import React from 'react'
import './CartButton.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/features/Cart';

const BeforCart = ({product}) => {
  
  const dispatch=useDispatch();
  return (
   <Box className='before-cart' > 
    <Button className='add-cart-button '
    disabled={product.available === 0}

    
    onClick={()=>dispatch(addToCart(product))} >
        {product.available === 0 ? 'Out of Stock' : ' Add to Cart'}
       
    </Button>
   </Box>
  )
}

export default BeforCart

