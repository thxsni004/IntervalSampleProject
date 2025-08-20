// src/components/multi-step-wizard/FormStepper.jsx
import React from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Personal Info", "Address", "Summary"];

const FormStepper = ({ step }) => {
  return (
    <Box sx={{ width: "100%", mb: 4 }}>
      <Stepper activeStep={step - 1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default FormStepper;
