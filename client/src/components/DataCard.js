import React, { useState, useRef, useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import edit from '../assets/edit.svg';
import confirm from '../assets/confirm.svg';
import { TextField } from '@mui/material';
import axios from 'axios';

export default function DataCard() {
    const { user } = useContext(AuthContext);
    const { login } = useContext(AuthContext);
    const [nameSrc, setNameSrc] = useState(user.name ? edit : confirm);
    const [birthSrc, setBirthSrc] = useState(user.day ? edit : confirm);
    const nombre = useRef(null);
    const dia = useRef(null);
    const mes = useRef(null);
    const anio = useRef(null);

    const handleName = async () => {
        console.log(user.useremail + ', ' + nombre.current.value);
        try {
            const response = await axios.put('https://mern-arte-numerologico-apis.vercel.app/api/name', {
              useremail: user.useremail,
              name: nombre.current.value
            });
            login(response.data.user);
          } catch(error) {
            console.log(error);
          }
    };

    const handleBirth = async () => {
        try {
            const response = await axios.put('https://mern-arte-numerologico-apis.vercel.app/api/birth', {
              useremail: user.useremail,
              day: dia.current.value,
              month: mes.current.value,
              year: anio.current.value
            });
            login(response.data.user);
          } catch(error) {
            console.log(error);
          }
    };

    const toggleName = () => {
        if(nameSrc === edit) {
            setNameSrc(confirm);
        }
        else {
            handleName();
            setNameSrc(edit);
        }
    }

    const toggleBirth = () => {
        if(birthSrc === edit) {
            setBirthSrc(confirm);
        }
        else {
            handleBirth();
            setBirthSrc(edit);
        }
    }
  return (
    <div className="dataCard">
        <h3>Mis Datos \/</h3>
        <p>Nombre completo:
            <span>{user.name ? user.name : (
                <TextField
                    className="input profile"
                    id="name"
                    label="Nombre"
                    variant="outlined"
                    size="small"
                    inputRef={nombre}/>
            )}</span>
            <img onClick={toggleName} style={{cursor:"pointer",filter:'invert(100%)',width:'20px'}} src={nameSrc} alt="edit" />
        </p>
        <p>Fecha de nacimiento:
            <span>{user.day ? `${user.day}/${user.month}/${user.year}` : (
                <>
                    <TextField
                        className="input"
                        id="day"
                        label="Dia"
                        variant="outlined"
                        size="small"
                        style={{width:'70px'}}
                        inputRef={dia}
                    />
                    <TextField
                        className="input"
                        id="month1"
                        label="Mes"
                        variant="outlined"
                        size="small"
                        style={{width:'70px'}}
                        inputRef={mes}
                    />
                    <TextField
                        className="input"
                        id="year1"
                        label="Año"
                        variant="outlined"
                        size="small"
                        style={{width:'70px'}}
                        inputRef={anio}
                    />
                </>
            )}</span>
            <img onClick={toggleBirth} style={{cursor:"pointer",filter:'invert(100%)',width:'20px'}} src={birthSrc} alt="edit" />
        </p>
    </div>
  )
}