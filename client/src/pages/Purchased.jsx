import React from 'react';
import { Box, Typography, Divider, useTheme } from '@mui/material';
import { useSelector } from 'react-redux';

const Purchased = () => {
      const theme = useTheme();
  const { purchased } = useSelector((state) => state.cart);

  return (
     <Box
      sx={{
        p: 3,
        backgroundColor: '#e7ddee',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: '#3b273d' }}>
        Your Purchases
      </Typography>

      {purchased.length === 0 ? (
        <Typography variant="h6" sx={{ color: '#3b273d' }}>
          You haven't purchased anything yet
        </Typography>
      ) : (
        <>
         {purchased.map((item) => (
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
              <Typography variant="h6">${item.count * 100}</Typography>
            </Box>
          ))}
        </>
      )}
    </Box>
  );
};

export default Purchased
