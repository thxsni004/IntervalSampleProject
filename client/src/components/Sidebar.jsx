// import { useNavigate } from "react-router-dom";
// import React from "react";
// import {
//   Box,
//   Divider,
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Typography,
//   Drawer,
//   useMediaQuery,
  
// } from "@mui/material";

// import DashboardIcon from '@mui/icons-material/Dashboard';
// import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import BarChartIcon from '@mui/icons-material/BarChart';
// import InventoryIcon from '@mui/icons-material/Inventory';
// import CategoryIcon from '@mui/icons-material/Category';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import LogoutIcon from '@mui/icons-material/Logout';

// import { useDispatch } from "react-redux";
// import { logout } from "../features/AuthSlice";

// const drawerWidth = 240;

// function Sidebar({ mobileOpen, handleDrawerToggle }) {

//   const navigate=useNavigate();
//   const  dispatch=useDispatch();
//   const isMobile = useMediaQuery('(max-width:750px)');

// const handleItemClick=(item)=>{
//   if(item.text === 'Logout'){
//     const confirmLogout= window.confirm('are you sure you want to logout');
//     if(confirmLogout){
//       dispatch(logout());
//       navigate('/login')
//     }
//   }
//   else if(item.path){
//     navigate(item.path)
//   }
// }

//   const content = (
//     <Box sx={{ width: drawerWidth, height: '100%', p: 2, bgcolor: '#f8f9fd',}}>
//       <Box sx={{  mb: 5,
//        mt:5,
//         display: 'flex',
//         alignI tems: 'center',
//         gap: 2,
//         }}>
//         <img src="/logo.jpg" alt="Logo" style={{ width: 60, height: 60, borderRadius: 60 }} />
//         <Typography fontWeight="bold"  sx={{ lineHeight: 1.2 }}>O2O <br /> Brand <br />Protector</Typography>
//       </Box>
// <Box sx={{mt:15}}>
//       <List>
//         {[
//           { icon: <DashboardIcon />, text: 'Home',path:'/dashboard' },
//           { icon: <ReceiptLongIcon />, text: 'Form',path:'/form' },
//           // { icon: <BarChartIcon />, text: 'Statistics' },
//           // { icon: <InventoryIcon />, text: 'Production' },
//           // { icon: <CategoryIcon />, text: 'Categories' },
//           {icon:<AccountCircleIcon />,text:'User Details',path:'/user-details'},
//           {icon:<LogoutIcon/>,text:'Logout'},
//         ].map((item, index) => (
//           <ListItemButton key={index} onClick={()=>handleItemClick(item)} 
//            sx={{
//               my: 1,
//               mx: 1,
//               borderRadius: 2,
//               transition: 'all 0.3s ease',
//               '&:hover': {
//                 backgroundColor: '#e0e7ff',
//                 transform: 'scale(1.02)',
//               },
//               ...(item.text === 'Logout' && {
//                 color: 'red',
//                 '&:hover': {
//                   backgroundColor: '#ffe5e5',
//                 },
//               }),
//             }}
//           >
//             <ListItemIcon  sx={{ color: item.text === 'Logout' ? 'red' : 'inherit' }}>{item.icon}</ListItemIcon>
//             <ListItemText primary={item.text}   primaryTypographyProps={{
//                 fontWeight: 500,
//                 fontSize: 15,}} />
//           </ListItemButton>
//         ))}
//       </List>
//       </Box>
//     </Box>
//   );

//   return isMobile ? (
//     <Drawer
//       variant="temporary"
//       open={mobileOpen}
//       onClose={handleDrawerToggle}
//       ModalProps={{ keepMounted: true }}
//       sx={{ '& .MuiDrawer-paper': { width: drawerWidth }  }}
//     >
//       {/* close icon */}

//       <Box sx={{display:'flex',justifyContent:'flex-end',p:1}} >
//         <IconButton onClick={handleDrawerToggle}>
//           <CloseIcon/>
//         </IconButton>
//       </Box>
//       {content}
//     </Drawer>
//   ) : (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: drawerWidth,
//           boxSizing: 'border-box',
//            bgcolor: '#f8f9fd',
//         },
//       }}
//       open
//     >
//       {content}
//     </Drawer>
    
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
  useTheme,
  Avatar,
  IconButton,
  Tooltip
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  ReceiptLong as ReceiptLongIcon,
  BarChart as BarChartIcon,
  Inventory as InventoryIcon,
  Category as CategoryIcon,
  AccountCircle as AccountCircleIcon,
  Logout as LogoutIcon,
  Close as CloseIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/AuthSlice";
import { toggleSidebar } from "../features/sidebarSlice";

const drawerWidth = 240;
const collapsedWidth = 80;

function Sidebar({ mobileOpen, handleDrawerToggle }) {
  const theme = useTheme();  //to acess breakpoint and colors
  const navigate = useNavigate();
  const dispatch = useDispatch();  //dispatch redux actions 
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));  //true if screen <md
  const sidebarOpen = useSelector((state) => state.sidebar.open);   //from redux
  const user = useSelector((state) => state.auth.user);

  const handleItemClick = (item) => {
    if (item.text === 'Logout') {
      const confirmLogout = window.confirm('Are you sure you want to logout?');
      if (confirmLogout) {
        dispatch(logout());
        navigate('/login');
      }
    } else if (item.path) {
      navigate(item.path);
      if (isMobile) handleDrawerToggle();
    }
  };

  const menuItems = [
    { icon: <DashboardIcon />, text: 'Dashboard', path: '/dashboard' },
    { icon: <ReceiptLongIcon />, text: 'Forms', path: '/form' },
    { icon: <BarChartIcon />, text: 'Temprature', path: '/weather' },
    // { icon: <AccountCircleIcon />, text: 'Profile', path: '/profile' },
     {icon:<AccountCircleIcon />,text:'User Details',path:'/user-details'},
  ];

  const SidebarContent = (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        background: 'linear-gradient(180deg, #ffffffff 0%, #6d2185ff 100%)',
        color: 'black',
      }}
    >
      {/* Header Section */}
      <Box 
        sx={{ 
          p: 3, 
          display: 'flex', 
          alignItems: 'center',
          justifyContent: sidebarOpen ? 'space-between' : 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        }}
      >
        {sidebarOpen ? (
          <>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2,mt:2 }}>
              <Avatar 
                src="/logo.jpg" 
                alt="Logo" 
                sx={{ width: 40, height: 40, border: '2px solid white' }} 
              />
              <Typography variant="subtitle" fontWeight="bold">
                O2O <br /> Brand <br />Protector
              </Typography>
            </Box>
            <IconButton 
              onClick={() => dispatch(toggleSidebar())} 
              sx={{ color: 'white' }}
            >
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </>
        ) : (
          <Tooltip title="Expand sidebar" placement="right">
            <Avatar 
              src="/logo.jpg" 
              alt="Logo" 
              sx={{ width: 40, height: 40, border: '2px solid white', cursor: 'pointer' }}
              onClick={() => dispatch(toggleSidebar())}
            />
          </Tooltip>
        )}
      </Box>

      {/* User Profile */}
      {sidebarOpen && (
        <Box 
          sx={{ 
            p: 3, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 2,
            borderBottom: '2px solid rgba(255, 255, 255, 0.12)',
          }}
        >
          <Avatar 
            sx={{ 
              width: 40, 
              height: 40, 
              bgcolor: theme.palette.secondary.main,
              fontSize: '1.5rem'
            }}
          >
            {user?.username?.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {user?.username || 'User'}
            </Typography>
            <Typography variant="caption">
              Admin
            </Typography>
          </Box>
        </Box>
      )}

      {/* Menu Items */}
      <List sx={{ flexGrow: 1, p: 1 }}>
        {menuItems.map((item, index) => (
          <ListItemButton
            key={index}
            onClick={() => handleItemClick(item)}
            sx={{
              borderRadius: 2,
              mb: 0.5,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              '&.Mui-selected': {
                backgroundColor: theme.palette.secondary.main,
                '&:hover': {
                  backgroundColor: theme.palette.secondary.dark,
                },
              },
              justifyContent: sidebarOpen ? 'initial' : 'center',
              px: sidebarOpen ? 3 : 2.5,
              minHeight: 48,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: sidebarOpen ? 3 : 'auto',
                color: 'inherit',
              }}
            >
              {item.icon}
            </ListItemIcon>
            {sidebarOpen && (
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ fontWeight: 500 }}
              />
            )}
          </ListItemButton>
        ))}
      </List>

      {/* Footer/Logout */}
      <Box sx={{ p: 2, borderTop: '1px solid rgba(255, 255, 255, 0.12)' }}>
        <ListItemButton
          onClick={() => handleItemClick({ text: 'Logout' })}
          sx={{
            borderRadius: 2,
            color: 'rgba(255, 255, 255, 0.7)',
            '&:hover': {
              color: 'white',
              backgroundColor: 'rgba(255, 99, 71, 0.1)',
            },
            justifyContent: sidebarOpen ? 'initial' : 'center',
            px: sidebarOpen ? 3 : 2.5,
          }}
        > 
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: sidebarOpen ? 3 : 'auto',
              color: 'inherit',
            }}
          >
            <LogoutIcon />
          </ListItemIcon>
          {sidebarOpen && (
            <ListItemText primary="Logout" />
          )}
        </ListItemButton>
      </Box>
    </Box>
  );

  return isMobile ? (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{ keepMounted: true }}
      sx={{
        '& .MuiDrawer-paper': { 
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      {SidebarContent}
    </Drawer>
  ) : (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarOpen ? drawerWidth : collapsedWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        '& .MuiDrawer-paper': {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
          width: sidebarOpen ? drawerWidth : collapsedWidth,
          boxSizing: 'border-box',
        },
      }}
      open={sidebarOpen}
    >
      {SidebarContent}
    </Drawer>
  );
}

export default Sidebar;