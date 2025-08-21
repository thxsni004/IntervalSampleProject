import React from 'react'
import { Typography ,Box} from "@mui/material";
import { useSelector } from 'react-redux';

const SelectedLocation = () => {

    const{selectedCountry ,selectedState ,selectedCity} = useSelector((state)=>state.location)
  return (
<Box>
<Typography variant="h6" gutterBottom sx={{fontFamily:'times new roman'}} >
    {selectedCountry && selectedState && selectedCity 
    ? `You Selected:  ${selectedCountry} → ${selectedState} → ${selectedCity}`
: "please select your location"}
</Typography>
</Box>
  )
}

export default SelectedLocation
