// src/pages/CartPage/CartPage.jsx
import React from 'react';
import { Box, Typography, Button, Divider, useTheme } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { buyProducts } from '../redux/features/Cart';

const CartPage = () => {
      const dispatch = useDispatch();
  const theme = useTheme();
  const { cartList } = useSelector((state) => state.cart);

  const calculateTotal = () => {
    return cartList.reduce((total, item) => total + (item.count || 0), 0);
  };

  const calculateTotalPrice = () => {
    // Since we don't have prices in our dummy data, we'll just count items
    return cartList.reduce((total, item) => total + (item.count || 0), 0);
  };

    const handlePlaceOrder = () => {
    // Dispatch an action to move items from cart to purchased
    dispatch(buyProducts());
    // You can add a confirmation dialog or navigation to a thank you page
    alert('Order placed successfully!');
  };

  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: '#e7ddee',
        minHeight: '100vh',
        
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: '#3b273d' , fontFamily:"times new roman" ,fontWeight:"bold",textAlign:"center",justifyContent:"center"}}>
        Your Cart
      </Typography>

      {cartList.length === 0 ? (
        <Typography variant="h6" sx={{ color: '#3b273d',fontFamily:"times new roman" ,fontWeight:"bold",textAlign:"center",justifyContent:"center" }}>
          Your cart is empty
        </Typography>
      ) : (
        <>
          {cartList.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 2,
                p: 2,
                backgroundColor: 'white',
                borderRadius: 1,
                boxShadow: 1,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 80, height: 60, objectFit: 'contain', marginRight: 2 }}
                />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                    Quantity: {item.count}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h6">${item.count * 100}</Typography> {/* Placeholder price */}
            </Box>
          ))}

          <Divider sx={{ my: 3 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6">Total Items:</Typography>
            <Typography variant="h6">{calculateTotal()}</Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
            <Typography variant="h6">Total Price:</Typography>
            <Typography variant="h6">${calculateTotalPrice() * 100}</Typography> {/* Placeholder calculation */}
          </Box>

          <Button
            variant="contained"
            onClick={handlePlaceOrder}
            sx={{
              backgroundColor: '#ff2290ff',
              '&:hover': { backgroundColor: 'rgba(230, 25, 121, 1)' },
              width: '100%',
              py: 1.5,
              fontSize: '1rem',
            }}
          >
            Place Order
          </Button>
        </>
      )}
    </Box>
  );
};

export default CartPage;