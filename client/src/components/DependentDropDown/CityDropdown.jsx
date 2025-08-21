// import React from "react";
// import {
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   CircularProgress,
//   Box 
// } from "@mui/material";
// import { useSelector, useDispatch } from "react-redux";
// import { setSelectedCity } from "../../redux/features/locationSlice";

// const CityDropdown = () => {
//   const dispatch = useDispatch();
//   const { cities, selectedCity, selectedState, loading } = useSelector(
//     (state) => state.location
//   );

//   const handleChange = (e) => {
//     dispatch(setSelectedCity(e.target.value));
//   };
//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth margin="normal" disabled={!selectedState}>
//         <InputLabel>City</InputLabel>
//         {loading ? (
//           <CircularProgress size={24} />
//         ) : (
//           <Select value={selectedCity} onChange={handleChange}>
//             {cities.length > 0 ? (
//               cities.map((c, i) => (
//                 <MenuItem key={i} value={c}>
//                   {c}
//                 </MenuItem>
//               ))
//             ) : (
//               <MenuItem disbled>no cities founded</MenuItem>
//             )}
//           </Select>
//         )}
//       </FormControl>
//     </Box>
//   );
// };

// export default CityDropdown;


import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Box,
  useTheme
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCity } from "../../redux/features/locationSlice";
import LocationCityIcon from '@mui/icons-material/LocationCity';

const CityDropdown = () => {
  const dispatch = useDispatch();
  const { cities, selectedCity, selectedState, loading } = useSelector(
    (state) => state.location
  );
  const theme = useTheme();

  const handleChange = (e) => {
    dispatch(setSelectedCity(e.target.value));
  };
  
  return (
    <Box sx={{ minWidth: 120, position: 'relative' }}>
      <FormControl 
        fullWidth 
        margin="normal" 
        disabled={!selectedState}
        sx={{
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: selectedState ? '#fff' : '#f9f9f9',
            transition: 'all 0.3s ease',
            '&:hover': !selectedState ? {} : {
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
            color: selectedState ? theme.palette.primary.main : 'text.disabled',
            '&.Mui-focused': {
              color: theme.palette.primary.main,
            }
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <LocationCityIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
            City
          </Box>
        </InputLabel>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            <CircularProgress size={28} />
          </Box>
        ) : (
          <Select 
            value={selectedCity} 
            onChange={handleChange}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationCityIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
                City
              </Box>
            }
          >
            {cities.length > 0 ? (
              cities.map((c, i) => (
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
              ))
            ) : (
              <MenuItem disabled sx={{ fontStyle: 'italic' }}>
                {selectedState ? "No cities found" : "Select a state first"}
              </MenuItem>
            )}
          </Select>
        )}
      </FormControl>
    </Box>
  );
};

export default CityDropdown;
