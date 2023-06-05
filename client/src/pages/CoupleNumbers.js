import React, { useRef, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { reducir, sumar, letrasANumeros } from '../components/Numerology.js';

export default function CoupleNumbers() {
  const [nombreUno, setNombreUno] = useState('');
  const [nombreDos, setNombreDos] = useState('');
  const [diaUno, setDiaUno] = useState('');
  const [mesUno, setMesUno] = useState('');
  const [anioUno, setAnioUno] = useState('');
  const [diaDos, setDiaDos] = useState('');
  const [mesDos, setMesDos] = useState('');
  const [anioDos, setAnioDos] = useState('');
  const resultados = useRef(null);

  const handleClick = () => {
    const consonantesUno = reducir(sumar(letrasANumeros(nombreUno, 2)));
    const consonantesDos = reducir(sumar(letrasANumeros(nombreDos, 2)));
    const vocalesUno = reducir(sumar(letrasANumeros(nombreUno, 1)));
    const vocalesDos = reducir(sumar(letrasANumeros(nombreDos, 1)));
    const totalesUno = reducir(sumar([consonantesUno + vocalesUno]));
    const totalesDos = reducir(sumar([consonantesDos + vocalesDos]));
    const nacUno = reducir(sumar([diaUno, mesUno, anioUno]));
    const nacDos = reducir(sumar([diaDos, mesDos, anioDos]));
    resultados.current.innerHTML = 'Números de: ' + nombreUno +
    '<br>' + consonantesUno + ', ' + vocalesUno + ', ' + totalesUno + ', ' + nacUno +
    '<br>Números de: ' + nombreDos +
    '<br>' + consonantesDos + ', ' + vocalesDos + ', ' + totalesDos + ', ' + nacDos;
  }

  const handleNombreUno = (e) => {
    const inputValue = e.currentTarget.value;
    if (inputValue === '' || /^[A-Za-zÀ-ÿ\s]+$/.test(inputValue)) {
      setNombreUno(inputValue);
    }
  };
  const handleNombreDos = (e) => {
    const inputValue = e.currentTarget.value;
    if (inputValue === '' || /^[A-Za-zÀ-ÿ\s]+$/.test(inputValue)) {
      setNombreDos(inputValue);
    }
  };
  const handleDiaUno = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 32) {
      setDiaUno(inputValue);
    }
  };
  const handleMesUno = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 13) {
      setMesUno(inputValue);
    }
  };
  const handleAnioUno = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 2051) {
      setAnioUno(inputValue);
    }
  };  
  const handleDiaDos = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 32) {
      setDiaDos(inputValue);
    }
  };
  const handleMesDos = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 13) {
      setMesDos(inputValue);
    }
  };
  const handleAnioDos = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 2051) {
      setAnioDos(inputValue);
    }
  };  

  return (
    <main className="container-fluid" style={{textAlign:'center'}}>
      <div className="row">
        <div className="col-1 co-sm-2"></div>
        <div className="col-5 co-sm-4">
          <label>Nombre completo</label>
        </div>
        <div className="col-5 co-sm-4">
          <label>Nombre completo</label>
        </div>
        <div className="col-1 co-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-1 co-sm-2"></div>
        <div className="col-5 co-sm-4">
          <TextField
            id="name1"
            label="Nombre 1"
            variant="outlined"
            value={nombreUno}
            onChange={handleNombreUno}/>
        </div>
        <div className="col-5 co-sm-4">
          <TextField
            id="name2"
            label="Nombre 2"
            variant="outlined"
            value={nombreDos}
            onChange={handleNombreDos}/>
        </div>
        <div className="col-1 co-sm-2"></div>
        </div>
      <div className="row">
        <div className="col-1 co-sm-2"></div>
        <div className="col-5 co-sm-4">
          <TextField
            id="day1"
            label="Dia"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={diaUno}
            onChange={handleDiaUno}
          />
          <TextField
            id="month1"
            label="Mes"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={mesUno}
            onChange={handleMesUno}
          />
          <TextField
            id="year1"
            label="Año"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={anioUno}
            onChange={handleAnioUno}
          />
        </div>
        <div className="col-5 co-sm-4">
          <TextField
            id="day2"
            label="Dia"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={diaDos}
            onChange={handleDiaDos}
          />
          <TextField
            id="month2"
            label="Mes"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={mesDos}
            onChange={handleMesDos}
          />
          <TextField
            id="year2"
            label="Año"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={anioDos}
            onChange={handleAnioDos}
          />
        </div>
        <div className="col-1 co-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-1 co-sm-2"></div>
        <div className="col-10 co-sm-8">
          <Button variant="contained" onClick={handleClick} style={{display:'block', margin:'10px auto'}}>Calcular</Button>
        </div>
        <div className="col-1 co-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-1 co-sm-2"></div>
        <div className="col-10 co-sm-8">
          <hr />
          <h2 style={{textAlign:'center'}}>Resultados</h2>
          <p ref={resultados} />
        </div>
        <div className="col-1 co-sm-2"></div>
      </div>
    </main>
  )
}