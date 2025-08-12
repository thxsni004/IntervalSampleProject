import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@mui/material';

const BuyNowDialog = ({ open, handleClose, handleConfirm, product }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Confirm Purchase</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to buy {product?.title}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button 
          onClick={handleConfirm} 
          color="primary"
          variant="contained"
          autoFocus
        >
          Confirm Purchase
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BuyNowDialog;