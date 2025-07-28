import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';

import Sidebar from '../components/Sidebar';
import BusinessDash from '../components/BusinessDash';
import SummarySection from '../components/SummarySection';

function Dashboard() {
  const { balance = 0, activity = [], categories = [] } = useSelector(
    (state) => state.dashboard || {}
  );

  return (
    <div className='' >
      
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <BusinessDash/>
      <SummarySection/>

    

    
      
    </Box>
    
    </div>
  );
}

export default Dashboard;
