import React, { useState, useRef, useContext } from 'react';
import { AuthContext } from './AuthContext';
import edit from '../assets/edit.svg';
import confirm from '../assets/confirm.svg';
import loading from '../assets/loading.svg';
import { TextField } from '@mui/material';
import axios from 'axios';

export default function DataCard() {
    const { user } = useContext(AuthContext);
    const { login } = useContext(AuthContext);
    const [nameSrc, setNameSrc] = useState(user.name ? edit : confirm);
    const [birthSrc, setBirthSrc] = useState(user.day ? edit : confirm);
    const [editName, setEditName] = useState(false);
    const [editBirth, setEditBirth] = useState(false);
    const nombre = useRef(null);
    const dia = useRef(null);
    const mes = useRef(null);
    const anio = useRef(null);

    const handleName = async () => {
        setNameSrc(loading);
        document.getElementById("nameIcon").classList.add("loading");
        nombre.current.disabled = true;
        try {
            const response = await axios.put('https://mern-arte-numerologico-apis.vercel.app/api/name', {
              useremail: user.useremail,
              name: nombre.current.value
            }).then(response => {
                nombre.current.disabled = false;
                login(response.data);
                const userString = JSON.stringify(response.data);
                document.cookie = `userData=${encodeURIComponent(userString)}; expires=Thu, 31 Dec 2023 23:59:59 UTC; path=/`;
                setEditName(false);
                setNameSrc(edit);
                document.getElementById("nameIcon").classList.remove("loading");
            });
          } catch(error) {
            console.log(error);
          }
    };

    const handleBirth = async () => {
        setBirthSrc(loading);
        document.getElementById("birthIcon").classList.add("loading");
        dia.current.disabled = true;
        mes.current.disabled = true;
        anio.current.disabled = true;
        try {
            const response = await axios.put('https://mern-arte-numerologico-apis.vercel.app/api/birth', {
              useremail: user.useremail,
              day: dia.current.value || 0,
              month: mes.current.value || 0,
              year: anio.current.value || 0
            }).then(response => {
                dia.current.disabled = false;
                mes.current.disabled = false;
                anio.current.disabled = false;
                login(response.data);
                const userString = JSON.stringify(response.data);
                document.cookie = `userData=${encodeURIComponent(userString)}; expires=Thu, 31 Dec 2023 23:59:59 UTC; path=/`;
                setEditBirth(false);
                setBirthSrc(edit);
                document.getElementById("birthIcon").classList.remove("loading");
            });
          } catch(error) {
            console.log(error);
          }
    };

    const toggleName = () => {
        if(nameSrc === edit) {
            setNameSrc(confirm);
            setEditName(true);
        }
        else {
            handleName();
        }
    }

    const toggleBirth = () => {
        if(birthSrc === edit) {
            setBirthSrc(confirm);
            setEditBirth(true);
        }
        else {
            handleBirth();
        }
    }

    const nameHandler = (e) => {
        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        if(!nameRegex.test(e.key) && (e.key !== 'Backspace' || e.key !== 'Enter' || e.key !== 'Tab')) {
            e.preventDefault();
        }
    }

    const dayHandler = (e) => {
        if((dia.current.value + e.key) <= 31 || e.key === 'Backspace' || e.key === 'Enter' || e.key === 'Tab') {
        }
        else {
            e.preventDefault();
        }
    }

    const monthHandler = (e) => {
        if((mes.current.value + e.key) <= 12 || e.key === 'Backspace' || e.key === 'Enter' || e.key === 'Tab') {
        }
        else {
            e.preventDefault();
        }
    }

    const yearHandler = (e) => {
        if((anio.current.value + e.key) <= 2050 || e.key === 'Backspace' || e.key === 'Enter' || e.key === 'Tab') {
        }
        else {
            e.preventDefault();
        }
    }

  return (
    <div className="dataCard">
        <h3>Mis Datos \/</h3>
        <p>Nombre completo:
            <span>{!editName ? ' ' + user.name + ' ' : (
                <TextField
                    className="input profile"
                    id="name"
                    label="Nombre"
                    variant="outlined"
                    size="small"
                    onKeyDownCapture={nameHandler}
                    inputRef={nombre}/>
            )}</span>
            <img
                id="nameIcon"
                onClick={toggleName}
                style={{cursor:"pointer",filter:'invert(100%)',width:'20px'}}
                src={nameSrc}
                alt="edit"
            />
        </p>
        <p>Fecha de nacimiento:
            <span>{!editBirth ? ` ${user.day}/${user.month}/${user.year} ` : (
                <>
                    <TextField
                        className="input"
                        id="day"
                        label="Dia"
                        variant="outlined"
                        size="small"
                        onKeyDownCapture={dayHandler}
                        style={{width:'70px'}}
                        inputRef={dia}
                    />
                    <TextField
                        className="input"
                        id="month1"
                        label="Mes"
                        variant="outlined"
                        size="small"
                        onKeyDownCapture={monthHandler}
                        style={{width:'70px'}}
                        inputRef={mes}
                    />
                    <TextField
                        className="input"
                        id="year1"
                        label="Año"
                        variant="outlined"
                        size="small"
                        onKeyDownCapture={yearHandler}
                        style={{width:'70px'}}
                        inputRef={anio}
                    />
                </>
            )}</span>
            <img
                id="birthIcon"
                onClick={toggleBirth}
                style={{cursor:"pointer",filter:'invert(100%)',width:'20px'}}
                src={birthSrc}
                alt="edit"
            />
        </p>
    </div>
  )
}