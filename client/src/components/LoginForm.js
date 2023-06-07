import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function LoginForm() {
  const { login } = useContext(AuthContext);
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'useremail') {
      setUseremail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      const response = await axios.post('https://mern-arte-numerologico-apis.vercel.app/api/login', { useremail, password });
      // Handle successful login, e.g., save token to local storage or state
      login(response.data.user);
      console.log('Login successful:', response.data);
    } catch (error) {
      // Handle login error, e.g., display error message to the user
      console.error('Login error:', error);
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        name="useremail"
        value={useremail}
        onChange={handleInputChange}
        label="Useremail"
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
      <Button type="submit" variant="contained" color="primary" disabled={useremail === '' || password === ''}>
        Ingresar
      </Button>
      <span style={{color:'red'}}>{errorMsg}</span>
    </form>
  );
}

export default LoginForm;