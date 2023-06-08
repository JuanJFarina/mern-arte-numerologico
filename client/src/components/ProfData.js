import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import DataCard from './DataCard';

export default function ProfData() {
  const { user } = useContext(AuthContext);
  return (
    <div>
        <h1 style={{textAlign:"center"}}>Hola !</h1>
        <p>Usuario {user.useremail}</p>
        <p>Ahora que tienes un perfil puedes acceder a un numeroscopio personal completo, incluyendo:</p>
        <ul>
            <li>Análisis de personalidad</li>
            <li>Análisis de talentos (vocacional)</li>
            <li>Análisis de etapas de vida</li>
        </ul>
        <p>Además puedes almacenar tu propio historial de numeroscopios y reutilizarlo rápidamente</p>
        <DataCard />
    </div>
  )
}