// import React from 'react';
// import {
//   Box,
//   Typography,
//   Divider,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText
// } from '@mui/material';

// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import CategoryIcon from '@mui/icons-material/Category';

// function Sidebar() {
//   return (
//     <Box
//       sx={{
//         width: 240,
//         height: '100vh',
//         backgroundColor: '#f8f9fd',
//         display: 'flex',
//         flexDirection: 'column',
//         borderRight: '1px solid #e0e0e0',
//         overflow: 'hidden',
//         position: 'relative',
//       }}
//     >
//       {/* Logo Section */}
//       <Box
//         sx={{
//           padding: '20px 16px 10px',
//           textAlign: 'left',
//           backgroundColor: '#f8f9fd',
//           position: 'sticky',
//           top: 0,
//           zIndex: 1,
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginBottom: '100px',
//             marginTop: '3rem',
//             gap: '18px',
//           }}
//         >
//           <img
//             src="/logo.jpg"
//             alt="O2O Logo"
//             style={{
//               width: '70px',
//               height: '70px',
//               marginBottom: '9px',
//               borderRadius: '50px',
//             }}
//           />
//           <Typography
//             variant="subtitle1"
//             sx={{
//               fontWeight: 'bold',
//               fontFamily: 'Times New Roman',
//               fontSize: '15px',
//             }}
//           >
//             O2O <br /> BRAND PROTECTOR
//           </Typography>
//         </Box>
//       </Box>

//       <Divider sx={{ my: 2 }} />

//       {/* Sidebar Menu */}
//       <List component="nav">
//         {[
//           { icon: <DashboardIcon />, text: 'Summary' },
//           { icon: <ReceiptLongIcon />, text: 'Transaction' },
//           { icon: <BarChartIcon />, text: 'Statistics' },
//           { icon: <InventoryIcon />, text: 'Production' },
//           { icon: <CategoryIcon />, text: 'Categories' },
//         ].map((item, index) => (
//           <ListItemButton
//             key={index}
//             sx={{
//               borderRadius: '8px',
//               margin: '4px 8px',
//               transition: 'background-color 0.3s ease',
//               color: 'gray',
//               '&:hover .MuiListItemText-primary': {
//                 color: 'black',
//                 fontWeight: 600,
//                 cursor: 'pointer',
//               },
//             }}
//           >
//             <ListItemIcon>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text} />
//           </ListItemButton>
//         ))}
//       </List>
//     </Box>
//   );
// }

// export default Sidebar;

import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  useMediaQuery,
} from "@mui/material";

import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BarChartIcon from '@mui/icons-material/BarChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from '@mui/icons-material/Logout';

import { useDispatch } from "react-redux";
import { logout } from "../features/AuthSlice";

const drawerWidth = 240;

function Sidebar({ mobileOpen, handleDrawerToggle }) {

  const navigate=useNavigate();
  const  dispatch=useDispatch();
  const isMobile = useMediaQuery('(max-width:750px)');

const handleItemClick=(item)=>{
  if(item.text === 'Logout'){
    const confirmLogout= window.confirm('are you sure you want to logout');
    if(confirmLogout){
      dispatch(logout());
      navigate('/login')
    }
  }
  else if(item.path){
    navigate(item.path)
  }
}

  const content = (
    <Box sx={{ width: drawerWidth, p: 2 }}>
      <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 2 ,mt:7,}}>
        <img src="/logo.jpg" alt="Logo" style={{ width: 60, height: 60, borderRadius: 60 }} />
        <Typography fontWeight="bold">O2O <br /> Brand <br />Protector</Typography>
      </Box>

      <List>
        {[
          { icon: <DashboardIcon />, text: 'Home',path:'/dashboard' },
          { icon: <ReceiptLongIcon />, text: 'Form',path:'/form' },
          { icon: <BarChartIcon />, text: 'Statistics' },
          { icon: <InventoryIcon />, text: 'Production' },
          { icon: <CategoryIcon />, text: 'Categories' },
          {icon:<AccountCircleIcon />,text:'User Details',path:'/user-details'},
          {icon:<LogoutIcon/>,text:'Logout'},
        ].map((item, index) => (
          <ListItemButton key={index} onClick={()=>handleItemClick(item)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );

  return isMobile ? (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: drawerWidth }  }}
    >
      {/* close icon */}

      <Box sx={{display:'flex',justifyContent:'flex-end',p:1}} >
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon/>
        </IconButton>
      </Box>
      {content}
    </Drawer>
  ) : (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#f8f9fd',
        },
      }}
      open
    >
      {content}
    </Drawer>
    
  );
}

export default Sidebar;

