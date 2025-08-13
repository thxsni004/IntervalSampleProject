// src/pages/CartPage/CartPage.jsx
import React from 'react';
import { Box, Typography, Button, Divider, IconButton,
  useTheme,
  useMediaQuery, } from '@mui/material';

import { buyProducts } from '../redux/features/Cart';
import { useNavigate } from 'react-router-dom';

import Sidebar from '../components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleSidebar } from '../redux/features/sidebarSlice';
import { moveItem } from '../redux/features/dragDropSlice';
import { useDispatch, useSelector } from 'react-redux';


const CartPage = () => {
  const theme = useTheme();
  
    const sidebarOpen = useSelector((state) => state.sidebar.open);

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
      const dispatch = useDispatch();
      const navigate=useNavigate();

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

  const handleViewPurchases=()=>{
    navigate('/purchased')
  }

  return (
     <Box display="flex" minHeight="100vh">
      <Sidebar
        mobileOpen={sidebarOpen}
        handleDrawerToggle={() => dispatch(toggleSidebar())}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: '100%',
          position: 'relative',
        }}
      >
        {isMobile && (
          <IconButton
            onClick={() => dispatch(toggleSidebar())}
            sx={{
              position: 'fixed',
              top: 10,
              left: 10,
              zIndex: theme.zIndex.drawer + 1,
              color: 'black',
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
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
              mb:2
            }}
          >
            Place Order
          </Button>

                   
        </>
      )}

          <Button
            variant="outlined"
            onClick={handleViewPurchases}
            sx={{
              width: '100%',
              py: 1.5,
              fontSize: '1rem',
              mt:2
            }}
          >
            View Purchase History
          </Button>
    </Box>
    </Box>
     </Box>
  );
};

export default CartPage;
