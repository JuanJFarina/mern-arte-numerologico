import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { reducir, sumar } from '../components/Numerology.js';
import InterpretationCard from '../components/InterpretationCard.js';

export default function BirthdateNumbers() {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [anio, setAnio] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleClick = () => {
    setResultado(reducir(sumar([dia,mes,anio])));
  }

  const handleDay = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 32) {
      setDia(inputValue);
    }
  };

  const handleMonth = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 13) {
      setMes(inputValue);
    }
  };

  const handleYear = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue < 2051) {
      setAnio(inputValue);
    }
  };

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4" style={{textAlign:'right', paddingTop:'5px'}}>
          <label>* Ingrese su fecha de nacimiento</label>
        </div>
        <div className="col-5 col-sm-4">
          <TextField
            className="input"
            id="day"
            label="Dia"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={dia}
            onChange={handleDay}/>
          <TextField
            className="input"
            id="month"
            label="Mes"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={mes}
            onChange={handleMonth}/>
          <TextField
            className="input"
            id="year"
            label="Año"
            variant="outlined"
            size="small"
            style={{width:'70px'}}
            value={anio}
            onChange={handleYear}/>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-10 col-sm-8">
          <Button variant="contained" onClick={handleClick} style={{display:'block', margin:'10px auto'}} disabled={dia === '' || mes === '' || anio === ''}>Calcular</Button>
          <p style={{fontSize:'12px'}}>* Puede utilizar esta herramienta para conocer números de distintas fechas con otros propósitos como organizar fiestas, reuniones, etc.</p>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-10 col-sm-8">
          <hr />
          <h2 style={{textAlign:'center'}}>Resultados</h2>
          {!resultado ? (
            <p className="emptyResults">Ingresa una fecha de nacimiento y calcula para ver la interpretacion.</p>
          ) : (
            <div className="interpretationGrid">
              <InterpretationCard
                label="Yo Espiritual"
                number={resultado}
                path="birthdate/yo-espiritual"
                description="Calculado a partir de la fecha de nacimiento."
              />
            </div>
          )}
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
    </main>
  )
}