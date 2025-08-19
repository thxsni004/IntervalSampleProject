import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { saveAddress } from '../../redux/features/formSlice'




const schema=Yup.object({
    street:Yup.string().required("street required"),
    city:Yup.string().required("enter Your city"),
    zip:Yup.string().matches(/^[0-9]+$/, "Must be numbers only")
    .required("Enter your Zip code "),
})

const AddressForm = ({next,back}) => {
    const dispatch=useDispatch();
    const address=useSelector((state)=>state.form.address)

  return (
    <Formik
    initialValues={address}
    validationSchema={schema}
    onSubmit={(values)=>{
        dispatch(saveAddress(values));
        next();
    }}
    >
{({errors,touched,handleChange})=>(

<Form>

<Box sx={{display:'flex' ,
 p:4 ,
flexDirection:'column',
 gap:2,
width:{xs:'100%' ,sm:400}
    
    }}>
                    <Typography variant="h5" sx={{ mb: 2, color: 'purple',textAlign:'center' }}>
              Address Information
            </Typography>

<TextField
name='street'
label="Street"
onChange={handleChange}
defaultValue={address.street}
error={touched.street && Boolean(errors.street)}
helperText={touched.street  && errors.street}

/>
<TextField 
name='city'
label='City'
onChange={handleChange}
defaultValue={address.city}
error={touched.city && Boolean(errors.city)}
helperText={touched.city && errors.city}
/>

<TextField
name='zip'
label='Zip'
onChange={handleChange}
defaultValue={address.zip}
error={touched.zip && Boolean(errors.zip)}
helperText={touched.zip && errors.zip}
/>
<Box sx={{display:'flex' , justifyContent:'space-between'}}>
    <Button onClick={back} variant='outlined' sx={{borderColor:'purple',color:'purple'}}>Back</Button>
     <Button type='submit' variant='contained' sx={{backgroundColor:'purple'}}>Next</Button>
</Box>

</Box>
</Form>
)}
    </Formik>
  )
}

export default AddressForm


