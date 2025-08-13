// import React from 'react'
// import ProductList from '../components/productList/ProductList'
// import { Box , IconButton,
//   useTheme,
//   useMediaQuery,} from '@mui/material'
// import Header from '../components/Header'

// import Sidebar from '../components/Sidebar';
// import MenuIcon from '@mui/icons-material/Menu';
// import { toggleSidebar } from '../redux/features/sidebarSlice';
// import { moveItem } from '../redux/features/dragDropSlice';
// import { useDispatch, useSelector } from 'react-redux';

// const ProductCart = () => {
//     const dispatch = useDispatch();
//   const sidebarOpen = useSelector((state) => state.sidebar.open);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//  <Box display="flex" minHeight="100vh">
//       <Sidebar
//         mobileOpen={sidebarOpen}
//         handleDrawerToggle={() => dispatch(toggleSidebar())}
//       />
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//           width: '100%',
//           position: 'relative',
//         }}
//       >
//         {isMobile && (
//           <IconButton
//             onClick={() => dispatch(toggleSidebar())}
//             sx={{
//               position: 'fixed',
//               top: 10,
//               left: 10,
//               zIndex: theme.zIndex.drawer + 1,
//               color: 'black',
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//         )}
//     <Header/>
//     <ProductList/>
//  </Box>
//   </Box>
//   )
// }

// export default ProductCart
import React from 'react'
import ProductList from '../components/productList/ProductList'
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import { toggleSidebar } from '../redux/features/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductCart = () => {
    const dispatch = useDispatch();
    const sidebarOpen = useSelector((state) => state.sidebar.open);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box display="flex" minHeight="100vh" sx={{ backgroundColor: '#e7ddee' }}>
            <Sidebar
                mobileOpen={sidebarOpen}
                handleDrawerToggle={() => dispatch(toggleSidebar())}
            />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: isMobile ? 1 : 3,
                    width: '100%',
                    position: 'relative',
                    backgroundColor: '#e7ddee',
                    // marginLeft: isMobile ? 0 : sidebarOpen ? '240px' : '0',
                    transition: theme.transitions.create('margin', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                    }),
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
                            // backgroundColor: 'rgba(255,255,255,0.7)',
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.9)',
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                )}
                <Header title="Accessories" />
                <ProductList />
            </Box>
        </Box>
    )
}

export default ProductCart;