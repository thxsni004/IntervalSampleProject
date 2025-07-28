import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../features/AuthSlice';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    } 
    const result = await dispatch(registerUser({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/login');
    }
  };

  return (
    <div>
      <Box
        sx={{
          width: 300,
          margin: '100px auto',
          padding: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" mb={2}>Register</Typography>

        <TextField
          fullWidth
          margin="normal"
          label="UserName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Register
        </Button>

        <Typography mt={2}>
          Already have an account?{' '}
          <Link component={RouterLink} to="/login">
            Login
          </Link>
        </Typography>
      </Box>
    </div>
  );
}

export default Register;
