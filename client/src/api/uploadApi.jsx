import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const uploadFile = async (file) => {  //this parameter means the file we want to upload
  const formData = new FormData(); // FormData is built-in object ->use for we want to send files to backend
  formData.append('file', file);  //add selected file in to the formdata

  try {
    const response = await axios.post(`${API_URL}/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'  // Backend knows we are sending file.

      } 
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || 'File upload failed';
  }
};