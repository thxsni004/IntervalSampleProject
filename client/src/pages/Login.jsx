import React, { useState } from 'react';
import { useDispatch,useSelector  } from 'react-redux';
import { login } from '../features/AuthSlice';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      navigate('/dashboard');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
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
        <Typography variant="h5" mb={2}>Login</Typography>

        <TextField
          fullWidth
          margin='normal'
          label="UserName"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          fullWidth
          margin='normal'
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} type="submit">
          Login
        </Button>

        <Typography mt={2}>
          Not registered?{' '}
          <Link component={RouterLink} to="/register">
            Register
          </Link>
        </Typography>
      </Box>
    </div>
  );
}

export default Login;
