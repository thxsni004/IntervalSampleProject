import React, { useState } from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import products from '../../api/products.json';
import { useSelector, useDispatch } from 'react-redux';
import CartButtons from './CartButton/CartButton';
import './ProductList.css';
import { buyProduct } from '../../redux/features/Cart';
import BuyNowDialog from '../BuyNowDialog';


const ProductList = () => {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { cartList ,products } = useSelector((state) => state.cart);
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
              <BuyNowDialog
        open={dialogOpen}
        handleClose={handleCloseDialog}
        handleConfirm={handleConfirmPurchase}
        product={selectedProduct}
      />
      <section>
        {products.map((product) => {
          const productInCart = cartList.find(item => item.id === product.id);
          const cartCount = productInCart?.count || 0;
          
          return (
          <Box className="product-container" key={product.id}>
            {/* Product Image */}
            <img src={product?.image} alt="product" />

            {/* Product Title */}
            <Typography variant="h6" sx={{ color: 'white', mt: 1 }}>
              {product?.title}
            </Typography>

            {/* Available Stock */}
            <Typography variant="body2" sx={{    color: product.available > 0 ? 'lightgreen' : 'error.main', mt: 0.5 }}>
             {product.available>0
             ?`Available:${product.available}`
             :'out of stock'}
            </Typography>

            {/* Rating */}
            <Typography variant="body2" sx={{ color: 'gold', mt: 0.5 }}>
              ⭐ {product?.rating}
            </Typography>

            {/* Add to Cart / Quantity Control */}
            <CartButtons product={product} />

            {/* Buy Now Button */}
            <Button
              variant="contained"
              sx={{
                mt: 9,
                mb: 3,
                backgroundColor: '#ff2290ff',
                '&:hover': { backgroundColor: 'rgba(230, 25, 121, 1)' },
              }}
              disabled={product.available <= 0}
              onClick={() => handleBuyNowClick(product)}
              >
                Buy Now
            </Button>
          </Box>
          );
})}
      </section>
    </Box>
  );
};

export default ProductList;