import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { reducir, sumar, letrasANumeros } from '../components/Numerology.js';
import InterpretationCard from '../components/InterpretationCard.js';

export default function NameNumbers() {
  const [nombre, setNombre] = useState('');
  const [resultados, setResultados] = useState(null);

  const handleClick = () => {
    setResultados({
      exterior: reducir(sumar(letrasANumeros(nombre, 2))),
      interior: reducir(sumar(letrasANumeros(nombre, 1))),
      real: reducir(sumar(letrasANumeros(nombre, 0))),
    });
  }

  const handleChange = (e) => {
    const inputValue = e.currentTarget.value;
    if (inputValue === '' || /^[A-Za-zÀ-ÿ\s]+$/.test(inputValue)) {
      setNombre(inputValue);
    }
  }

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-5 col-sm-4" style={{textAlign:'right', paddingTop:'15px'}}>
          <label>* Ingrese su nombre completo</label>
        </div>
        <div className="col-5 col-sm-4">
        <TextField
          className="input"
          id="name"
          label="Nombre"
          variant="outlined"
          value={nombre}
          onChange={handleChange}/>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-10 col-sm-8">
          <Button variant="contained" onClick={handleClick} style={{display:'block', margin:'10px auto'}} disabled={nombre.trim() === ''}>Calcular</Button>
          <p style={{fontSize:'12px'}}>* Si desea conocer sus números más fuertes, deberá usar el nombre que figura en su Documento de Identidad.
            En caso de que no coincida con el nombre que más fuerte le identifique, pruebe con este último también y compare los resultados.
            También puede utilizar esta herramienta para conocer los números de pila, apodos, ciudades, etc.</p>
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-10 col-sm-8">
          <hr />
          <h2 style={{textAlign:'center'}}>Resultados</h2>
          {!resultados ? (
            <p className="emptyResults">Ingresa un nombre y calcula para ver las interpretaciones.</p>
          ) : (
            <div className="interpretationGrid">
              <InterpretationCard
                label="Yo Exterior"
                number={resultados.exterior}
                path="name/yo-exterior"
                description="Calculado a partir de las consonantes del nombre."
              />
              <InterpretationCard
                label="Yo Interior"
                number={resultados.interior}
                path="name/yo-interior"
                description="Calculado a partir de las vocales del nombre."
              />
              <InterpretationCard
                label="Yo Real"
                number={resultados.real}
                path="name/yo-real"
                description="Calculado a partir de todas las letras del nombre."
              />
            </div>
          )}
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
    </main>
  )
}