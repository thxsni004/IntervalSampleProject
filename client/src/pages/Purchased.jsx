import React from 'react';
import { Box, Typography, Divider, useTheme, IconButton,
 
  useMediaQuery } from '@mui/material';


import Sidebar from '../components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleSidebar } from '../redux/features/sidebarSlice';
import { moveItem } from '../redux/features/dragDropSlice';
import { useDispatch, useSelector } from 'react-redux';



const Purchased = () => {

   const dispatch = useDispatch();
    const sidebarOpen = useSelector((state) => state.sidebar.open);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    
  const { purchased } = useSelector((state) => state.cart);

  return (
    
     <Box
      sx={{
        p: 3,
        backgroundColor: '#e7ddee',
        minHeight: '100vh',
      }}
    >
      <Typography variant="h4" sx={{ mb: 3, color: '#3b273d' ,justifyContent:"center",alignItems:"center",fontFamily:"times new roman",fontWeight:"bold",textAlign:"center"}}>
        Your Purchases
      </Typography>

      {purchased.length === 0 ? (
        <Typography variant="h6" sx={{ color: '#3b273d',justifyContent:"center",alignItems:"center",fontFamily:"times new roman",textAlign:"center" }}>
          You haven't purchased anything yet
        </Typography>
      ) : (
        <>
         {purchased.map((item) => (
            <Box
              key={`${item.id}-${Math.random()}`}
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


// import React from 'react';
// import { Box, Typography, Divider, useTheme } from '@mui/material';
// import { useSelector } from 'react-redux';

// const Purchased = () => {
//   const theme = useTheme();
//   const { purchased } = useSelector((state) => state.cart);

//   return (
//     <Box sx={{ p: 3, backgroundColor: '#e7ddee', minHeight: '100vh' }}>
//       <Typography variant="h4" sx={{ mb: 3, color: '#3b273d' }}>
//         Your Purchase History
//       </Typography>

//       {purchased.length === 0 ? (
//         <Typography variant="h6" sx={{ color: '#3b273d' }}>
//           You haven't purchased anything yet
//         </Typography>
//       ) : (
//         purchased.map((item) => (
//           <Box
//             key={`${item.id}-${Math.random()}`}
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               mb: 2,
//               p: 2,
//               backgroundColor: 'white',
//               borderRadius: 1,
//               boxShadow: 1,
//             }}
//           >
//             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 style={{ width: 80, height: 60, objectFit: 'contain', marginRight: 2 }}
//               />
//               <Box sx={{ ml: 2 }}>
//                 <Typography variant="h6">{item.title}</Typography>
//                 <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//                   Quantity: {item.count}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
//                   Price: ${item.count * 100}
//                 </Typography>
//               </Box>
//             </Box>
//           </Box>
//         ))
//       )}
//     </Box>
//   );
// };

// export default Purchased;