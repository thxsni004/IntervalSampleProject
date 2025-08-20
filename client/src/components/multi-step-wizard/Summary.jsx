import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitForm } from '../../redux/features/formSlice';
import { CardContent, Typography ,Box,Card, Button, Snackbar ,Alert } from '@mui/material';

const Summary = ({back}) => {
    const{personalInfo,address}=useSelector((state)=>state.form)
    const dispatch=useDispatch();
    const[open,setOpen] =useState(false);


    const handleSubmit=()=>{
        dispatch(submitForm());
        setOpen(true);
    };

  return (
<Box sx={{display:'flex', flexDirection:'column' ,gap:3,alignItems:'center',width:{xs:'100%',sm:400 }}}>
    <Card         sx={{ 
          boxShadow: 5, 
          borderRadius: 3,

        }} >
        <CardContent sx={{ p: 4 }} >
            <Typography 
            variant="h5" 
            sx={{ 
              mb: 3, 
              color: 'purple',
              textAlign: 'center',
              fontWeight:'bold',
              fontFamily:'times new roman'
            }}
          >
            Review Your Information
          </Typography>
            <Typography variant='h6' sx={{fontFamily:'times new roman',fontWeight:'bold',mb:2}} >  Personal Information</Typography>
            <Typography><b>Name</b> : {personalInfo.name}</Typography>
            <Typography><b>Email</b> : {personalInfo.email} </Typography>

            <Box>
                            <Typography variant="h6" sx={{fontFamily:'times new roman',fontWeight:'bold',mb:2,mt:2 }}>
              Address Information
            </Typography>
            <Typography><b>Street</b> :{address.street} </Typography>
            <Typography><b>City</b >  :{address.city} </Typography>
            <Typography><b>Zip</b> :{address.zip}</Typography>
            </Box>
        </CardContent>
    </Card>

    <Box sx={{gap:2,display:'flex',flexDirection:'row'}}>
<Button onClick={back} variant='outlined' sx={{color:'purple',borderColor:'purple'}} >Back</Button>
<Button onClick={handleSubmit} variant='contained' sx={{bgcolor:'purple'}} >Submit</Button>
    </Box>

    {/* <Snackbar
    open={open}
    autoHideDuration={3000}
    message='Form submitted successfully'
    onClose={()=>setOpen(false)}
    /> */}
     <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={()=>setOpen(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert 
        onClose={() => setOpen(false)} 
        severity="success" 
        variant="filled"
        sx={{ 
          width: '100%', 
          color: 'green', 
          bgcolor: 'white', 
          fontWeight: 'bold',
          fontFamily: 'times new roman',
          borderRadius:4,
        }}
      >
         Form Submitted Successfully!
      </Alert>
    </Snackbar>
    

   

      

</Box>
  )
}

export default Summary


