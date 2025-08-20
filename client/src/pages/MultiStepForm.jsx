import { Container } from '@mui/material'
import React, { useState } from 'react'
import PersonalInfoForm from '../components/multi-step-wizard/PersonalInfoForm'
import AddressForm from '../components/multi-step-wizard/AddressForm'
import Summary from '../components/multi-step-wizard/Summary'
import FormStepper from "../components/multi-step-wizard/FormStepper";



const MultiStepForm = () => {

    const[step,setStep]=useState(1);

  return (
  <Container sx={{ 
      mt:5,
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center',
      minHeight:'80vh'

    }}>
            <FormStepper step={step} />
    {step ===1 &&   <PersonalInfoForm next={()=> setStep(2)} /> }
  
   {step ===2  &&  <AddressForm next={()=>setStep(3)} back={()=>setStep(1)} />}

{step === 3 &&   <Summary back={()=> setStep(2)} />}
</Container>
  )
}

export default MultiStepForm
