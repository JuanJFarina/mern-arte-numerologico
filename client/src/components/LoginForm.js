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
      const userString = JSON.stringify(response.data.user);
      document.cookie = `userData=${encodeURIComponent(userString)}; expires=Thu, 31 Dec 2023 23:59:59 UTC; path=/`;
      login(response.data.user);
    } catch (error) {
      // Handle login error, e.g., display error message to the user
      console.error('Login error:', error);
      setErrorMsg(error.response.data.message);
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    await axios.post('https://mern-arte-numerologico-apis.vercel.app/api/forgotPassword', { useremail: useremail })
    .then(response => {
      console.log(response);
      setErrorMsg('El email fue enviado correctamente, por favor revisa también la carpeta de Spam');
    })
    .catch(response => console.log(response));
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        className="input"
        type="text"
        name="useremail"
        value={useremail}
        onChange={handleInputChange}
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        className="input"
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        label="Contraseña"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <div style={{color:'red', fontWeight:'bold', textAlign:'center', height:'30px'}}>{errorMsg}</div>
      <Button style={{display:'block', margin:'0px auto'}} type="submit" variant="contained" color="primary" disabled={useremail === '' || password === ''}>
        Ingresar
      </Button>
      <Button style={{display:'block', margin:'5px auto'}} variant="contained" color="primary" onClick={resetPassword} disabled={useremail.length < 8}>
        Olvidé mi contraseña
      </Button>
    </form>
  );
}

export default LoginForm;