import React, { useState } from 'react';
import { Box, Typography, Grid  } from '@mui/material';
import { useSelector } from 'react-redux';

import { useTheme, useMediaQuery } from '@mui/material';

import Sidebar from '../components/Sidebar';
import BusinessDash from '../components/BusinessDash';
import SummarySection from '../components/SummarySection';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

function Dashboard() {
  const { balance = 0, activity = [], categories = [] } = useSelector(
    (state) => state.dashboard || {}
  );
    const [mobileOpen, setMobileOpen] = useState(false);
const theme = useTheme();
 const isMobile = useMediaQuery('(max-width:750px)');



    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    
      
    <Box  sx={{ display: 'flex' ,}}>
      <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          ml: { sm: '-1px' },
        }}
      >
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ mb: 2 }}>
            <MenuIcon />
          </IconButton>
        )}
        <BusinessDash />
        {/* <SummarySection /> */}
      </Box>

    

    
      
    </Box>
    
    
  );
}

export default Dashboard;
