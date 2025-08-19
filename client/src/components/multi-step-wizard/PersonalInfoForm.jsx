import React from "react";
import { Box, TextField,Button,Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { savePersonalInfo } from "../../redux/features/formSlice";
import { purple } from "@mui/material/colors";

const schema = Yup.object({
  name: Yup.string().required("Enter your name"),
  email: Yup.string().email("inavild email").required("enter your email"),
});

const PersonalInfoForm = ({ next }) => {
  const dispatch = useDispatch();
  const personalInfo = useSelector((state) => state.form.personalInfo);

  return (
    <Formik
      initialValues={personalInfo}
      validationSchema={schema}
      onSubmit={(values) => {
        dispatch(savePersonalInfo(values));
        next();
      }}
    >
      {({ errors, touched, handleChange }) => (
        <Form>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
                width: { xs: '100%', sm: 400 },
              gap: 3,
              p: 2,
              alignContent: "center",

            }}
          >

                        <Typography variant="h5" sx={{ mb: 2, color: 'purple' , textAlign:'center' }}>
              Personal Information
            </Typography>
            <TextField
              name="name"
              label="Name"
              onChange={handleChange}
              defaultValue={personalInfo.name}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <TextField name="email"
             label="Email"
              onChange={handleChange}
              defaultValue={personalInfo.email}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              />
              <Button variant="outlined" type="submit" sx={{borderColor:'purple' ,
                color:'purple',
                py:1.5,
                '&:hover':{bgcolor:'#f1d6efff'}

                }}>Next</Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalInfoForm;
