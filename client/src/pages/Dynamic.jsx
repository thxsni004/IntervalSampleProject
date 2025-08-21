import React, { useState } from "react";
import { Formik, Form, FieldArray } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux"; 
import {
  TextField,
  Button,
  IconButton,
  Box,
  Typography,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Avatar,
  Chip
} from "@mui/material";
import { Add, Delete, Person, CheckCircle } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

import Sidebar from "../components/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleSidebar } from "../redux/features/sidebarSlice";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material"; 

const initialValues = {
  people: [
    {
      name: "",
      age: "",
    },
  ],
};

const validationSchema = Yup.object().shape({
  people: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Enter your name").min(2, "Too short"),
      age: Yup.number()
        .typeError("Must be a number")
        .required("Enter Age")
        .positive("Must be positive")
        .integer("Must be whole number")
        .min(18, "Must be at least 18")
        .max(100, "Must be 100 or less"),
    })
  ),
});

const DynamicForm = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [submittedData, setSubmittedData] = useState([]);
const dispatch = useDispatch(); 

  const handleSubmit = (values) => {
    setSubmittedData(values.people);
    setOpenDialog(true);
  };
  const sidebarOpen = useSelector((state) => state.sidebar.open);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
 
  return (

      
    <Box sx={{
      maxWidth: '800px',
      mx: 'auto',
      p: 4,
      bgcolor: 'background.paper',
      borderRadius: 2,
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
      mt:19
    }}>
      <Stack direction="row" alignItems="center" spacing={2} mb={4}>
        <Avatar sx={{ bgcolor: 'purple' }}>
          <Person />
        </Avatar>
        <Typography variant="h5" fontWeight={600}>
          Team Registration
        </Typography>
      </Stack>

      <Divider sx={{ mb: 4 }} />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, dirty }) => (
          <Form>
            <FieldArray name="people">
              {({ push, remove }) => (
                <Box>
                  <Typography variant="subtitle1" color="text.secondary" mb={2}>
                    Team Members ({values.people.length})
                  </Typography>

                  {values.people.map((person, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 3,
                        mb: 2,
                        border: `1px solid ${grey[200]}`,
                        borderRadius: 1,
                        position: 'relative',
                        '&:hover': {
                          borderColor: grey[300],
                        }
                      }}
                    >
                      <Stack direction="row" spacing={2} alignItems="flex-start">
                        <Chip 
                          label={`#${index + 1}`} 
                          size="small" 
                          sx={{ 
                            position: 'absolute', 
                            top: -10, 
                            left: 16,
                            bgcolor: '#e48ff0ff',
                            color: 'primary.contrastText'
                          }} 
                        />

                        <TextField
                          label="Full Name"
                          name={`people[${index}].name`}
                          value={person.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.people?.[index]?.name &&
                            Boolean(errors.people?.[index]?.name)
                          }
                          helperText={
                            touched.people?.[index]?.name &&
                            errors.people?.[index]?.name
                          }
                          fullWidth
                          variant="standard"
                          sx={{ flex: 2 }}
                        />

                        <TextField
                          label="Age"
                          name={`people[${index}].age`}
                          value={person.age}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={
                            touched.people?.[index]?.age &&
                            Boolean(errors.people?.[index]?.age)
                          }
                          helperText={
                            touched.people?.[index]?.age &&
                            errors.people?.[index]?.age
                          }
                          fullWidth
                          variant="standard"
                          sx={{ flex: 1 }}
                        />

                        <IconButton
                          onClick={() => remove(index)}
                          disabled={values.people.length === 1}
                          sx={{
                            color: grey[500],
                            '&:hover': {
                              color: 'error.main'
                            }
                          }}
                        >
                          <Delete />
                        </IconButton>
                      </Stack>
                    </Box>
                  ))}

                  <Button
                    variant="text"
                    startIcon={<Add />}
                    onClick={() => push({ name: "", age: "" })}
                    sx={{
                      mt: 1,
                      color: '#8f137eff',
                      fontWeight: 500
                    }}
                  >
                    Add another member
                  </Button>
                </Box>
              )}
            </FieldArray>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                type="submit"
                variant="contained"
                
                // disabled={!isValid || !dirty}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 1,
                  textTransform: 'none',
                  fontSize: '1rem',
                  boxShadow: 'none',
                  bgcolor:'purple',
                  '&:hover': {
                    boxShadow: 'none',
                    bgcolor: '#8f137eff'
                  }
                }}
              >
                Complete Registration
              </Button>
            </Box>
          </Form>
        )}
      </Formik>

      {/* Submission Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            p: 1
          }
        }}
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          alignItems: 'center',
          fontWeight: 600
        }}>
          <CheckCircle color="success" sx={{ mr: 1 }} />
          Registration Successful
        </DialogTitle>
        
        <DialogContent dividers>
          <Typography variant="body2" color="text.secondary" mb={3}>
            {submittedData.length} team members registered
          </Typography>

          <Box sx={{ 
            maxHeight: '400px', 
            overflowY: 'auto',
            pr: 1
          }}>
            {submittedData.map((person, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  mb: 1,
                  borderRadius: 1,
                  bgcolor: grey[50]
                }}
              >
                <Avatar sx={{ 
                  width: 40, 
                  height: 40, 
                  mr: 2,
                  bgcolor: 'purple',
                  color: 'primary.contrastText'
                }}>
                  {person.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography fontWeight={500}>{person.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Age: {person.age}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>
        
        <DialogActions sx={{ p: 2 }}>
          <Button
            onClick={() => setOpenDialog(false)}
            variant="outlined"
            sx={{
              borderRadius: 1,
              px: 3,
              textTransform: 'none',
              color:"#8f137eff",
              borderColor: '#8f137eff',
            }}
          >
            Close
          </Button>

        </DialogActions>
      </Dialog>
    </Box>

         
  );
};

export default DynamicForm;