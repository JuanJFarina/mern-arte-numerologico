import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { AuthContext } from './AuthContext';

function RegisterForm() {
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');

    if(useremail !== '' && password !== '') {
        try {
        // Send a request to your backend API to register the user
        const response = await axios.post('/api/register', { useremail, password });

        // Handle successful registration and login
        login(response.data.user);
        console.log('Registration successful:', response.data);
        } catch (error) {
        // Handle registration error, e.g., display error message to the user
        console.error('Registration error:', error);
        setErrorMsg(error.response.data.message);
        }
    }
    setUseremail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleRegister}>
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
        Registrar
      </Button>
      <span style={{color:'red'}}>{errorMsg}</span>
    </form>
  );
}

export default RegisterForm;