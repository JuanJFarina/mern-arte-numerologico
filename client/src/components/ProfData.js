import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import DataCard from './DataCard';
import { Button } from '@mui/material';

export default function ProfData() {
  const { user, logout } = useContext(AuthContext);

  const logoutHandler = () => {
    document.cookie = 'userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    logout();
  }

  return (
    <div>
        <h1 className="userGreet">Hola {user.name} !</h1>
        <p>Ahora que tienes un perfil puedes acceder a un numeroscopio personal completo, incluyendo:</p>
        <ul>
            <li>Análisis de personalidad</li>
            <li>Análisis de talentos (vocacional)</li>
            <li>Análisis de vida</li>
        </ul>
        <p>Además puedes almacenar tu propio historial de numeroscopios y reutilizarlo rápidamente</p>
        <DataCard />
        <Button style={{display:'block', margin:'10px auto'}} variant="contained" color="primary" onClick={logoutHandler}>
          Cerrar sesión
        </Button>
    </div>
  )
}