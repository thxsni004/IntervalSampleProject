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
  useMediaQuery,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Sidebar from "../components/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

import { useTheme } from "@mui/material/styles";

import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../redux/features/sidebarSlice";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { addSubmission } from "../redux/features/formSlice";

const educationOptions = [
  "High School",
  "Diploma",
  "Graduate",
  "Post Graduate",
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required("please enter your name"),
  email: Yup.string().email("Invalid email").required("enter valid email"),
  address: Yup.string().required("Enter you'r Adrress"),
  education: Yup.string().required("select Your Qualification"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("enter Phone number"),
  dob: Yup.date()
    .nullable()
    .typeError("Date of Birth is required")
    .required("Date of Birth is required"),
  gender: Yup.array().min(1, "Select at least one gender"),
});

function FormikMaterialForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDialog, setOpenDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <Box display="flex">
      <Sidebar
        mobileOpen={sidebarOpen}
        handleDrawerToggle={() => dispatch(toggleSidebar())}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: isSmallMobile ? 1 : 1,
          width: "100%",
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          // marginLeft: sidebarOpen && !isMobile ? "240px" : 0,
        }}
      >
        {isMobile && (
          <IconButton
            onClick={() => dispatch(toggleSidebar())}
            sx={{
              position: "fixed",
              top: 10,
              left: 10,
              zIndex: theme.zIndex.drawer + 1,
              color: "black",
            }}
          >
            <MenuIcon />
          </IconButton>
        )}

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
              dispatch(addSubmission(values));
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
                <Box
                  display="flex"
                  flexDirection="column"
                  gap={2}
                  width="100%"
                  maxWidth={500}
                  mx="auto"
                  mt={5}
                >
                  <Typography variant="h5" align="center">
                    Registration Form
                  </Typography>

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
                    onChange={(value) => setFieldValue("dob", value ?? null)}
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
            <DialogTitle
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Times new roman",
              }}
            >
              Form Submitted
            </DialogTitle>
            <DialogContent>
              <Typography variant="body1">
                Your form has been submitted successfully.
              </Typography>
              {submittedData && (
                <Box mt={2}>
                  <Typography variant="subtitle2">
                    Submitted Details:
                  </Typography>
                  {Object.entries(submittedData).map(([key, value]) => (
                    <ul key={key}>
                      <Typography variant="body2">
                        <strong>
                          {key.charAt(0).toUpperCase() + key.slice(1)}:
                        </strong>{" "}
                        {
                          Array.isArray(value) //checkbox
                            ? value.join(",")
                            : value instanceof Date //date object convert into  readable
                            ? value.toLocaleDateString() //gives something  like "7/31/2025"
                            : value //render the value normally
                        }
                      </Typography>
                    </ul>
                  ))}
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
      </Box>
    </Box>
  );
}

export default FormikMaterialForm;
