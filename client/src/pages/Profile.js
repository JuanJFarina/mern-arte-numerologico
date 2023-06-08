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

  const handleName = useCallback(async (name) => {
    try {
      const response = await axios.put('https://mern-arte-numerologico-apis.vercel.app/api/name', {
        useremail: user.useremail,
        name: name
      });
      console.log(response.data.user);
      //login(response.data.user);
    } catch(error) {
      console.log(error);
    }
  }, [user.useremail, login]);

  const handleBirth = useCallback(async (day, month, year) => {
    try {
      const response = await axios.put('https://mern-arte-numerologico-apis.vercel.app/api/birth', {
        useremail: user.useremail,
        day: day,
        month: month,
        year: year
      });
      login(response.data.user);
    } catch(error) {
      console.log(error);
    }
  }, [user.useremail, login]);

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
            <Button variant="contained" color="primary" onClick={handleToggleForm}>
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