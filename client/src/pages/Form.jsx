import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  MenuItem,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { Formik, Form } from "formik";
import * as Yup from "yup";

const educationOptions = ["High School", "Diploma", "Graduate", "Post Graduate"];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  address: Yup.string().required("Required"),
  education: Yup.string().required("Required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Required"),
  dob: Yup.date().required("Required"),
  gender: Yup.array().min(1, "Select at least one gender"),
});

function FormikMaterialForm() {
  const [openDialog, setOpenDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          education: "",
          phone: "",
          dob: null,
          gender: [],
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          setSubmittedData(values);
          setOpenDialog(true);
          resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form>
            <Box display="flex" flexDirection="column" gap={2} width="100%" maxWidth={500} mx="auto" mt={5}>
              <Typography variant="h5" align="center">Registration Form</Typography>

              <TextField
                label="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                fullWidth
              />

              <TextField
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                fullWidth
              />

              <TextField
                label="Address"
                name="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.address && Boolean(errors.address)}
                helperText={touched.address && errors.address}
                fullWidth
              />

              <TextField
                label="Education"
                name="education"
                select
                value={values.education}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.education && Boolean(errors.education)}
                helperText={touched.education && errors.education}
                fullWidth
              >
                {educationOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Phone Number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
                fullWidth
              />

              <DatePicker
                label="Date of Birth"
                value={values.dob}
                onChange={(value) => setFieldValue("dob", value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    name="dob"
                    onBlur={handleBlur}
                    error={touched.dob && Boolean(errors.dob)}
                    helperText={touched.dob && errors.dob}
                    fullWidth
                  />
                )}
              />

              <FormGroup>
                <Typography>Gender</Typography>
                {["Male", "Female", "Other"].map((gender) => (
                  <FormControlLabel
                    key={gender}
                    control={
                      <Checkbox
                        name="gender"
                        value={gender}
                        checked={values.gender.includes(gender)}
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          const newGender = checked
                            ? [...values.gender, value]
                            : values.gender.filter((g) => g !== value);
                          setFieldValue("gender", newGender);
                        }}
                      />
                    }
                    label={gender}
                  />
                ))}
                {touched.gender && errors.gender && (
                  <Typography color="error" fontSize="0.8rem">
                    {errors.gender}
                  </Typography>
                )}
              </FormGroup>

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {/* Submit Popup */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Form Submitted</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Thank you! Your form has been submitted successfully.
          </Typography>
          {submittedData && (
            <Box mt={2}>
              <Typography variant="subtitle2">Submitted Details:</Typography>
              <pre>{JSON.stringify(submittedData, null, 2)}</pre>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
}

export default FormikMaterialForm;
