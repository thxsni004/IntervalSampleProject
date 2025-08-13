// import React from 'react';
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Button
// } from '@mui/material';




// const BuyNowDialog = ({ open, handleClose, handleConfirm, product }) => {
//   return (
    
//     <Dialog open={open} onClose={handleClose}>
//       <DialogTitle sx={{fontFamily:"times new roman",textAlign:"center",fontWeight:"bold"}} >Confirm Purchase</DialogTitle>
//       <DialogContent>
//         <DialogContentText sx={{fontFamily:"times new roman"}}>
//           Are you sure you want to buy {product?.title}?
//         </DialogContentText>

//       </DialogContent>
//       <DialogActions>
//         <Button sx={{color:"purple"}} onClick={handleClose}>Cancel</Button>
//         <Button 
//           onClick={handleConfirm} 
          
//           sx={{bgcolor:"purple",color:"white"}}
//           autoFocus
//         >
//           Confirm Purchase
//         </Button>
//       </DialogActions>
//     </Dialog>
   
//   );
// };

// export default BuyNowDialog;

import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@mui/material';
import BlurText from "../components/Animations/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const BuyNowDialog = ({ open, handleClose, handleConfirm, product }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{fontFamily:"times new roman",textAlign:"center",fontWeight:"bold"}}>
     Confirm Purchase
      </DialogTitle>
      <DialogContent>
        <DialogContentText sx={{fontFamily:"times new roman"}}>
             <BlurText
          text={`Are you sure you want to buy ${product?.title}?`}
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-2xl mb-8"
        />
          
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button sx={{color:"purple"}} onClick={handleClose}>Cancel</Button>
        <Button 
          onClick={handleConfirm} 
          sx={{bgcolor:"purple",color:"white"}}
          autoFocus
        >
          Confirm Purchase
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BuyNowDialog;