import React, {useMemo} from 'react'
import AfterCart from '../CartButton/AfterCart'
import BeforCart from '../CartButton/BeforeCart'
import { useSelector } from 'react-redux';

const CartButtons = ({product}) => {
    const {cartList} = useSelector((state)=>state.cart);

  
    const cartCount=useMemo(()=>{
      return cartList?.find((item)=>item?.id ===product?.id)?.count;
    },[cartList]);

   return (
    <>
      {cartCount>0 ? (<AfterCart productID={product?.id} cartCount={cartCount} />
      ):(
      <BeforCart  product={product} />)}
    </>
  );
};

export default CartButtons

