import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedState,
  fetchCities,
} from "../../redux/features/locationSlice";
import { CircularProgress, useTheme } from "@mui/material";
import FlagIcon from '@mui/icons-material/Flag';

const StateDropdown = () => {
  const dispatch = useDispatch();
  const { states, selectedState, selectedCountry, loading } = useSelector(
    (state) => state.location
  );
  const theme = useTheme();

  const handleChange = (e) => {
    const state = e.target.value;
    dispatch(setSelectedState(state));
    if (state) dispatch(fetchCities({ country: selectedCountry, state }));
  };

  return (
    <Box sx={{ minWidth: 120, position: 'relative' }}>
      <FormControl 
        fullWidth 
        margin="normal" 
        disabled={!selectedCountry}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: selectedCountry ? '#fff' : '#f9f9f9',
            transition: 'all 0.3s ease',
            '&:hover': !selectedCountry ? {} : {
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
            color: selectedCountry ? theme.palette.primary.main : 'text.disabled',
            '&.Mui-focused': {
              color: theme.palette.primary.main,
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <FlagIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
            State
          </Box>
        </InputLabel>
        {!selectedState && loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            <CircularProgress size={28} />
          </Box>
        ) : (
          <Select 
            value={selectedState }  
            onChange={handleChange}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <FlagIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                State
              </Box>
            }
          >
            
            {states.length > 0 ? (
              states.map((s,i) => (
                <MenuItem 
                  key={i} 
                  value={s}
                  sx={{
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.light + '20',
                    }
                  }}
                >
                  {s}
                </MenuItem>
              ))
            ) : (
              <MenuItem disabled sx={{ fontStyle: 'italic' }}>
                {selectedCountry ? "No States Found" : "Select a country first"}
              </MenuItem>
            )}
          </Select>
        )}
      </FormControl>
    </Box>
  );
};

export default StateDropdown;