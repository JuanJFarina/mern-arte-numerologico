import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import { AuthContext } from '../components/AuthContext';

export default function Profile() {
  const [toLogin, setToLogin] = useState(true);
  const [data, setData] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mern-arte-numerologico-apis.vercel.app/api/data');
      //setData(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggleForm = () => {
    setToLogin(!toLogin);
  };

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-10 col-sm-8">
          <h2 style={{ textAlign: 'center' }}>{data}</h2>
          {user ? (
            <h3 style={{ textAlign: 'center' }}>Logged in as: {user.useremail}</h3>
          ) : toLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}
          {!user ? (
            <Button variant="contained" color="primary" onClick={handleToggleForm}>
              {toLogin ? 'Crear cuenta' : 'Iniciar sesión'}
            </Button>
          ) : ''}
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
    </main>
  );
}