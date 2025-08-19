
import React, { useState } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import CartButtons from './CartButton/CartButton';
import './ProductList.css';
import { buyProduct } from '../../redux/features/CartSlice';
// import BuyNowDialog from '../BuyNowDialog';
import GlobalDialog from '../GlobalDialog';

const ProductList = () => {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const { cartList, products } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleConfirmPurchase = () => {
    dispatch(buyProduct(selectedProduct));
    setDialogOpen(false);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  // Calculate grid columns based on screen size
  const getGridTemplateColumns = () => {
    if (isSmallMobile) return 'repeat(1, 1fr)';
    if (isMediumScreen) return 'repeat(2, 1fr)';
    return 'repeat(4, 1fr)';
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#e7ddee',
        p: isSmallMobile ? 1 : 2,
        minHeight: '100vh',
      }}
    >
      {/* <BuyNowDialog
        open={dialogOpen}
        handleClose={handleCloseDialog}
        handleConfirm={handleConfirmPurchase}
        product={selectedProduct}
      /> */}

      <GlobalDialog
      open={dialogOpen}
      setOpen={setDialogOpen}
      data={{
        title:{"confirm Purchase":""},
        message:`Are you sure you want to buy ${selectedProduct?.title}?`,
        close:true,
      }}
      type='confirm'
      animated={true}
       confirmBtnText="Confirm Purchase"  // ✅ custom text
  cancelBtnText="Cancel" 
      onConfirm={handleConfirmPurchase}
      onCancel={handleCloseDialog}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: getGridTemplateColumns(),
          gap: isSmallMobile ? '16px' : '24px',
          padding: isSmallMobile ? '8px' : '16px',
          width: '100%',
        }}
      >
        {products.map((product) => {
          const productInCart = cartList.find(item => item.id === product.id);
          const cartCount = productInCart?.count || 0;
          
          return (
            <Box 
              className="product-container" 
              key={product.id}
              sx={{
                maxWidth: '100%',
                width: '100%',
              }}
            >
              <img 
                src={product?.image} 
                alt="product" 
                style={{
                  width: '100%',
                  height: isSmallMobile ? '150px' : '210px',
                  objectFit: 'contain',
                  borderRadius:18
                }}
              />

              <Typography variant="h6" sx={{ color: 'white', mt: 1, fontSize: isSmallMobile ? '1rem' : '1.25rem' }}>
                {product?.title}
              </Typography>

              <Typography variant="body2" sx={{ color: product.available > 0 ? 'lightgreen' : 'error.main', mt: 0.5 }}>
                {product.available > 0 ? `Available: ${product.available}` : 'Out of stock'}
              </Typography>

              <Typography variant="body2" sx={{ color: 'gold', mt: 0.5 }}>
                ⭐ {product?.rating}
              </Typography>

              <CartButtons  product={product} />

              <Button
                variant="contained"
                sx={{
                  mt: isSmallMobile ? 9 : 9,
                  mb: 2,
                  backgroundColor: '#ff2290ff',
                  '&:hover': { backgroundColor: 'rgba(230, 25, 121, 1)' },
                  fontSize: isSmallMobile ? '0.75rem' : '0.875rem',
                  padding: isSmallMobile ? '6px 12px' : '8px 16px',
                }}
                disabled={product.available <= 0}
                onClick={() => handleBuyNowClick(product)}
              >
                Buy Now
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductList;