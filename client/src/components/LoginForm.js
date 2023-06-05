import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/login', { username, password });
      // Handle successful login, e.g., save token to local storage or state
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login error, e.g., display error message to the user
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="username"
        value={username}
        onChange={handleInputChange}
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;