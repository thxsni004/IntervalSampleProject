import React, { useEffect } from "react";
import {
  Box,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  CircularProgress,
  Typography,
  useTheme
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCountries,
  setSelectedCountry,
  fetchStates,
} from "../../redux/features/locationSlice";
import PublicIcon from '@mui/icons-material/Public';

const CountryDropdown = () => {
  const dispatch = useDispatch();
  const { countries, selectedCountry, loading } = useSelector(
    (state) => state.location
  );
  const theme = useTheme();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleChange = (e) => {
    const country = e.target.value;
    dispatch(setSelectedCountry(country));
    if (country) dispatch(fetchStates(country));
  };

  return (
    <Box sx={{ minWidth: 120, position: 'relative' }}>
      <FormControl 
        fullWidth 
        margin="normal"
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: '#fff',
            transition: 'all 0.3s ease',
            '&:hover': {
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            },
            '&.Mui-focused': {
              boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
            }
          }
        }}
      >
        <InputLabel 
          sx={{ 
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            '&.Mui-focused': {
              color: theme.palette.primary.main,
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PublicIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
            Country
          </Box>
        </InputLabel>
        {/* {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            <CircularProgress size={28} />
          </Box>
        ) : ( */}
          <Select 
            value={selectedCountry} 
            onChange={handleChange}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PublicIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                Country
              </Box>
            }
          >
            {countries.map((c,i) => (
              <MenuItem 
                key={i} 
                value={c}
                sx={{
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light + '20',
                  }
                }}
              >
                {c}
              </MenuItem>
            ))}
          </Select>
        {/* )} */}
      </FormControl>
    </Box>
  );
};

export default CountryDropdown;