import React from 'react';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import BarChartIcon from '@mui/icons-material/BarChart';
import InventoryIcon from '@mui/icons-material/Inventory';
import CategoryIcon from '@mui/icons-material/Category';

function Sidebar() {
  return (
    <Box
      sx={{
        width: 240,
        height: '100vh',
        backgroundColor: '#f8f9fd',
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid #e0e0e0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          padding: '20px 16px 10px',
          textAlign: 'left',
          backgroundColor: '#f8f9fd',
          position: 'sticky',
          top: 0,
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '100px',
            marginTop: '3rem',
            gap: '18px',
          }}
        >
          <img
            src="/logo.jpg"
            alt="O2O Logo"
            style={{
              width: '70px',
              height: '70px',
              marginBottom: '9px',
              borderRadius: '50px',
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 'bold',
              fontFamily: 'Times New Roman',
              fontSize: '15px',
            }}
          >
            O2O <br /> BRAND PROTECTOR
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* Sidebar Menu */}
      <List component="nav">
        {[
          { icon: <DashboardIcon />, text: 'Summary' },
          { icon: <ReceiptLongIcon />, text: 'Transaction' },
          { icon: <BarChartIcon />, text: 'Statistics' },
          { icon: <InventoryIcon />, text: 'Production' },
          { icon: <CategoryIcon />, text: 'Categories' },
        ].map((item, index) => (
          <ListItemButton
            key={index}
            sx={{
              borderRadius: '8px',
              margin: '4px 8px',
              transition: 'background-color 0.3s ease',
              color: 'gray',
              '&:hover .MuiListItemText-primary': {
                color: 'black',
                fontWeight: 600,
                cursor: 'pointer',
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
