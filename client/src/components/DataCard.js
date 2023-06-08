import React, { useState, useRef, useContext } from 'react';
import { AuthContext } from '../components/AuthContext';
import edit from '../assets/edit.svg';
import confirm from '../assets/confirm.svg';
import { TextField } from '@mui/material';

export default function DataCard() {
    const { user } = useContext(AuthContext);
    const [nameSrc, setNameSrc] = useState(user.name ? edit : confirm);
    const [birthSrc, setBirthSrc] = useState(user.day ? edit : confirm);
    const [editName, setEditName] = useState(false);
    const [editBirth, setEditBirth] = useState(false);
    const nombre = useRef(null);
    const dia = useRef(null);
    const mes = useRef(null);
    const anio = useRef(null);

    const toggleName = () => {
        if(nameSrc === edit) {
            setNameSrc(confirm);
            setEditName(true);
        }
        else {
            handleName();
            setNameSrc(edit);
            setEditName(false);
        }
    }

    const toggleBirth = () => {
        if(birthSrc === edit) {
            setBirthSrc(confirm);
            setEditBirth(true);
        }
        else {
            handleBirth();
            setBirthSrc(edit);
            setEditBirth(false);
        }
    }
  return (
    <div className="dataCard">
        <h3>Mis Datos \/</h3>
        <p>Nombre completo:
            <span>{!editName ? ' ' + user.name : (
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
            <span>{!editBirth ? ` ${user.day}/${user.month}/${user.year}` : (
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