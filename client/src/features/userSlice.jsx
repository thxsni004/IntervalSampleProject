

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, Name: 'Snow', Designation: 'Chief Executive Officer ', PhoneNumber: 9876543210, Department: 'Management' },
    { id: 2, Name: 'Lannister', Designation: 'Chief Technology Officer (CTO)', PhoneNumber: 9876543211, Department: 'tech' },
    { id: 3, Name: 'Lannister', Designation: 'Project Manager', PhoneNumber: 9876543212, Department: 'tech' },
    { id: 4, Name: 'Stark', Designation: 'Software Developer', PhoneNumber: 9876543213, Department: 'Development' },
    { id: 5, Name: 'Targaryen', Designation: 'UI/UX Designer', PhoneNumber: 9876543215, Department: 'Design' },
    { id: 6, Name: 'Melisandre', Designation: "HR Manager", PhoneNumber: 9871343216, Department: 'Human Resources' },
    { id: 7, Name: 'Clifford', Designation: 'Business Analyst', PhoneNumber: 9876543456, Department: 'Analysis' },
    { id: 8, Name: 'Frances', Designation: 'Customer Support Executive', PhoneNumber: 9876543216, Department: 'Support' },
    { id: 9, Name: 'Roxie', Designation: 'Relationship Manager', PhoneNumber: 9876543217, Department: 'Client Relations' },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((u) => u.id === action.payload.id);
      if (index !== -1) state.users[index] = action.payload;
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
