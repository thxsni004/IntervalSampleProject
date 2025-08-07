// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   uploadFileThunk,
//   resetUploadState,
// } from "../redux/features/UploadSlice";
// import {
//   Button,
//   Typography,
//   Box,
//   Paper,
//   LinearProgress,
//   Alert,
//   IconButton,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@mui/material";
// import {
//   Upload as UploadIcon,
//   Delete as DeleteIcon,
//   PictureAsPdf,
//   Image,
// } from "@mui/icons-material";

// const FileUpload = () => {
//   const dispatch = useDispatch();



//   const [file, setFile] = useState(null);
//   const [previewURL, setPreviewURL] = useState(null);
//   const [localError, setLocalError] = useState(null);  //filetype-sizr error before upload

//   const { uploadStatus, error, uploadedFileInfo } = useSelector(
//     (state) => state.upload
//   );
// const handleFileChange = (e) => {
//   const selectedFile = e.target.files[0];
//   if (!selectedFile) return;   

//   const allowedTypes = [
//     "image/jpeg",
//     "image/png",
//     "image/gif",
//     "application/pdf",
//   ];
//   if (!allowedTypes.includes(selectedFile.type)) {
//     setLocalError("Only images (JPEG, PNG, GIF) and PDFs are allowed");
//     setPreviewURL(null); // clear preview
//     return;
//   }

//   if (selectedFile.size > 2 * 1024 * 1024) {
//     setLocalError("File size exceeds 2MB limit");
//     setPreviewURL(null); // clear preview
//     return;
//   }

//   setLocalError(null);
//   setFile(selectedFile);

//   // create preview URL
//   const fileURL = URL.createObjectURL(selectedFile);
//   setPreviewURL(fileURL);
// };


//   const handleUpload = async () => {
//     if (!file) return;

//     try {
//       await dispatch(uploadFileThunk(file)).unwrap();
//     } catch (error) {
//       console.error("Upload failed:", error);
//     }
//   };

//   const handleReset = () => {
//     dispatch(resetUploadState());
//     setFile(null);
//     setLocalError(null);
//     setPreviewURL(null);
//   };

//   const getFileIcon = (type) => {
//     if (!type) return <UploadIcon />;

//     if (type === "application/pdf") return <PictureAsPdf />;
//     if (type.startsWith("image/")) return <Image />;
//     return <UploadIcon />;
//   };

//   return (  
//     <Box sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
//       <Paper elevation={3} sx={{ p: 3 }}>
//         <Typography variant="h5" gutterBottom>
//           File Upload
//         </Typography>

//         <Typography variant="body2" color="text.secondary" gutterBottom>
//           Allowed formats: JPEG, PNG, GIF, PDF (Max 2MB)
//         </Typography>

//         {(error || localError) && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {error || localError}
//           </Alert>
//         )}     

//         {uploadStatus === "succeeded" && (
//           <Alert severity="success" sx={{ mb: 2 }}>
//             File uploaded successfully!
//           </Alert>
//         )}

//         {uploadStatus === "loading" && <LinearProgress sx={{ mb: 2 }} />}

//         {!file && !uploadedFileInfo && (
//           <Button
//             variant="contained"
//             component="label"
//             startIcon={<UploadIcon />}
//             fullWidth
//             sx={{ mb: 2 }}
//           >
//             Select File
//             <input
//               type="file"
//               hidden
//               onChange={handleFileChange}
//               accept="image/*,.pdf"
//             />
//           </Button>
//         )}

//         {file && !uploadedFileInfo && (
//           <List>
//             <ListItem
//               secondaryAction={
//                 <IconButton edge="end" onClick={handleReset}>
//                   <DeleteIcon />
//                 </IconButton>
//               }
//             >
//               <ListItemIcon>{getFileIcon(file.type)}</ListItemIcon>
//               <ListItemText
//                 primary={file.name}
//                 secondary={`${(file.size / 1024).toFixed(2)} KB`}
//               />
//             </ListItem>
//           </List>
//         )}

//         {uploadedFileInfo && (
//           <List>
//             <ListItem>
//               <ListItemIcon>
//                 {getFileIcon(uploadedFileInfo.mimetype)}
//               </ListItemIcon>
//               <ListItemText
//                 primary={uploadedFileInfo.originalname}
//                 secondary={`Uploaded: ${new Date().toLocaleString()}`}
//               />
//             </ListItem>
//           </List>
//         )}

//         {file && !uploadedFileInfo && uploadStatus !== "loading" && (
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={handleUpload}
//             fullWidth
//             disabled={!file || uploadStatus === "loading"}
//           >
//             Upload File
//           </Button>
//         )}

//         {uploadedFileInfo && (
//           <Button
//             variant="outlined"
//             onClick={handleReset}
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Upload Another File
//           </Button>
//         )}

//         {previewURL && (
//   <Box mt={2}>
//     {file && file.type === "application/pdf" ? (
//       <embed src={previewURL} width="100%" height="400px" type="application/pdf" />
//     ) : (
//       <img src={previewURL} alt="Preview" style={{ maxWidth: '100%', height: 'auto' }} />
//     )}
//   </Box>
// )}

//       </Paper>
//     </Box>
//   );
// };

// export default FileUpload;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadFileThunk,
  resetUploadState,
} from "../redux/features/UploadSlice";
import {
  Button,
  Typography,
  Box,
  LinearProgress,
  Alert,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Upload as UploadIcon,
  Delete as DeleteIcon,
  PictureAsPdf,
  Image,
} from "@mui/icons-material";

const FileUpload = ({ value, error, onChange, onBlur }) => {
  const dispatch = useDispatch();
  const [previewURL, setPreviewURL] = useState(null);
  const [localError, setLocalError] = useState(null);

  const { uploadStatus, uploadedFileInfo } = useSelector(
    (state) => state.upload
  );

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      setLocalError("Only JPEG, PNG, GIF, or PDF files allowed.");
      setPreviewURL(null);
      onChange(null); // Formik update
      return;
    }

    if (selectedFile.size > 2 * 1024 * 1024) {
      setLocalError("File size exceeds 2MB limit.");
      setPreviewURL(null);
      onChange(null); // Formik update
      return;
    }

    setLocalError(null);
    setPreviewURL(URL.createObjectURL(selectedFile));
    onChange(selectedFile); // set Formik value
  };

  const handleReset = () => {
    dispatch(resetUploadState());
    onChange(null);
    setPreviewURL(null);
    setLocalError(null);
  };

  const getFileIcon = (type) => {
    if (!type) return <UploadIcon />;
    if (type === "application/pdf") return <PictureAsPdf />;
    if (type.startsWith("image/")) return <Image />;
    return <UploadIcon />;
  };

  return (
    <Box>
      <Typography variant="subtitle1">Upload File</Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        Allowed: JPEG, PNG, GIF, PDF (Max 2MB)
      </Typography>

      {(localError || error) && (
        <Alert severity="error" sx={{ mb: 1 }}>
          {localError || error}
        </Alert>
      )}

      {uploadStatus === "loading" && <LinearProgress sx={{ mb: 1 }} />}

      {!value && (
        <Button
          variant="outlined"
          component="label"
          startIcon={<UploadIcon />}
          fullWidth
          sx={{ mb: 1 }}
        >
          Select File
          <input
            type="file"
            hidden
            onChange={handleFileChange}
            onBlur={onBlur}
            accept="image/*,.pdf"
          />
        </Button>
      )}

      {value && (
        <List>
          <ListItem
            secondaryAction={
              <IconButton edge="end" onClick={handleReset}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemIcon>{getFileIcon(value.type)}</ListItemIcon>
            <ListItemText
              primary={value.name}
              secondary={`${(value.size / 1024).toFixed(2)} KB`}
            />
          </ListItem>
        </List>
      )}

      {value && previewURL && (
        <Box mt={2}>
          {value.type === "application/pdf" ? (
            <embed
              src={previewURL}
              width="100%"
              height="300px"
              type="application/pdf"
            />
          ) : (
            <img
              src={previewURL}
              alt="Preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </Box>
      )}
    </Box>
  );
};

export default FileUpload;

