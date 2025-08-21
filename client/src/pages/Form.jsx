import React, { useState, useEffect } from "react";
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
import FileUpload from "../components/FileUpload";



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
  .required("Date of Birth is required"),
  gender: Yup.array().min(1, "Select at least one gender"),

  file: Yup.mixed()
    .required("File is required")
    .test(
      "fileSize",
      "File too large (Max 2MB)",
      (value) => !value || value.size <= 2 * 1024 * 1024
    )
    .test(
      "fileType",
      "Unsupported Format (JPEG, PNG, GIF, PDF only)",
      (value) =>
        !value ||
        ["image/jpeg", "image/png", "image/gif", "application/pdf"].includes(
          value.type
        )
    ),
});

function FormikMaterialForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDialog, setOpenDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  useEffect(() => {
    console.log("Dialog open:", openDialog);
  }, [openDialog]);

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
              file: null,
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log("Form submitted with:", values);

              const safeValues = {
                ...values,
                dob: values.dob ? values.dob.toISOString() : null,
                file: values.file
                  ? {
                      name: values.file.name,
                      size: values.file.size,
                      type: values.file.type,
                    }
                  : null,
              };

              dispatch(addSubmission(safeValues));
              setSubmittedData(safeValues);
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
                    slotProps={{
                      textField: {
                        fullWidth: true,
                        margin: "normal",
                        size: "normal", 
                        error: touched.dob && Boolean(errors.dob),
                        helperText: touched.dob && errors.dob,
                      },
                    }}
                  />

                  <FileUpload
                    value={values.file}
                    onChange={(file) => setFieldValue("file", file)}
                    onBlur={() => setFieldValue("file", values.file)}
                    error={touched.file && errors.file}
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

          <Dialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            fullWidth
            maxWidth="sm"
            sx={{ zIndex: 9999 }}
          >
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
                  {Object.entries(submittedData).map(([key, value]) => {
                    let displayValue;

                    if (Array.isArray(value)) {
                      displayValue = value.join(", ");
                    } else if (value instanceof Date) {
                      displayValue = value.toLocaleDateString();
                    } else if (key === "dob" && typeof value === "string") {
                      displayValue = new Date(value).toLocaleDateString();
                    } else if (
                      key === "file" &&
                      value &&
                      typeof value === "object"
                    ) {
                      displayValue = value.name; // get file name
                    } else {
                      displayValue = value;
                    }

                    return (
                      <Box key={key} mt={1}>
                        <Typography variant="body2">
                          <strong>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:
                          </strong>{" "}
                          {displayValue}
                        </Typography>
                      </Box>
                    );
                  })}
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
