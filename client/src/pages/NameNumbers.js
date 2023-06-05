import React, { useRef, useState } from 'react';
import { TextField, Button } from '@mui/material';
import { reducir, sumar, letrasANumeros } from '../components/Numerology.js';

export default function NameNumbers() {
  const [nombre, setNombre] = useState('');
  const resultados = useRef(null);

  const handleClick = () => {
    resultados.current.innerHTML = 'Número de Yo Exterior: ' + reducir(sumar(letrasANumeros(nombre, 2)))
    + "<br>Número de Yo Interior: " + reducir(sumar(letrasANumeros(nombre, 1)))
    + "<br>Número de Yo Real: " + reducir(sumar(letrasANumeros(nombre, 0)));
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
          <Button variant="contained" onClick={handleClick} style={{display:'block', margin:'10px auto'}}>Calcular</Button>
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
          <p ref={resultados} />
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
    </main>
  )
}