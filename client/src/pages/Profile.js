import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import ProfData from '../components/ProfData';
import { AuthContext } from '../components/AuthContext';

const Profile = React.memo(() => {
  const [toLogin, setToLogin] = useState(true);
  const { user } = useContext(AuthContext);

  const handleToggleForm = () => {
    setToLogin(!toLogin);
  };

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-10 col-sm-8">
          {user ? (
            <ProfData />
          ) : toLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}
          {!user ? (
            <Button style={{display:'block', margin:'5px auto'}} variant="contained" color="primary" onClick={handleToggleForm}>
              {toLogin ? 'Crear cuenta' : 'Iniciar sesión'}
            </Button>
          ) : ''}
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
    </main>
  );
});

export default Profile;