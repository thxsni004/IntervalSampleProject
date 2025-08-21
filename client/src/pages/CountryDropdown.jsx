import React from 'react';
import { Box, Container, Typography, Paper, Card, Chip, Stack } from '@mui/material';
import CountryDropdown from '../components/DependentDropDown/CountryDropdown';
import StateDropdown from '../components/DependentDropDown/StateDropdown';
import CityDropdown from '../components/DependentDropDown/CityDropdown';
import SelectedLocation from '../components/DependentDropDown/SelectedLocation';

const CountryDropdownPage = () => {
  return (
    <Container maxWidth='md' sx={{ mt: 5, mb: 5 }}>
      <Paper 
        elevation={8} 
        sx={{ 
          p: 4, 
          borderRadius: 3,
          background: 'linear-gradient(135deg, #e9eceeff 0%, #c385d8ff 100%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom 
          align="center" 
          sx={{ 
            fontWeight: 'bold',
            color: '#2d3748',
            mb: 4,
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            fontFamily: 'times new roman'
          }}
        >
          Location Selector
        </Typography>
        
        <Card sx={{ p: 2, mb: 3 , backgroundColor: 'transparent' ,boxShadow:0}}>
          <SelectedLocation />
        </Card>
        
        <Stack spacing={3} sx={{ p: 2 }}>
          <CountryDropdown/>
          <StateDropdown/>
          <CityDropdown/>
        </Stack>
        
        {/* <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Chip 
            label="Powered by CountriesNow API" 
            variant="outlined" 
            sx={{ color: 'text.secondary' }}
          />
        </Box> */}
      </Paper>
    </Container>
  );
}

export default CountryDropdownPage;