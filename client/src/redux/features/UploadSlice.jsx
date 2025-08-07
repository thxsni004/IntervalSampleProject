import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { uploadFile } from '../../api/uploadApi';

// 1. First define the async thunk
export const uploadFileThunk = createAsyncThunk(
  'upload/uploadFile',
  async (file, { rejectWithValue }) => {
    try {
      const response = await uploadFile(file);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  uploadStatus: 'idle', // 
  error: null, //store error  
  uploadedFileInfo: null  //store fileinfo if sucess upload
};

const uploadSlice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    resetUploadState: (state) => {
      return initialState;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadFileThunk.pending, (state) => {
        state.uploadStatus = 'loading';
        state.error = null;
      })
      .addCase(uploadFileThunk.fulfilled, (state, action) => {
        state.uploadStatus = 'succeeded';
        state.uploadedFileInfo = action.payload;
      })
      .addCase(uploadFileThunk.rejected, (state, action) => {
        state.uploadStatus = 'failed';
        state.error = action.payload;
      });
  }
});

export const { resetUploadState } = uploadSlice.actions;
export default uploadSlice.reducer;