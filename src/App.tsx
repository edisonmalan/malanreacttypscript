import React, { useState } from 'react';
import './App.css';
import Acumulador from './ejercicios/ejercicio5';
import { calcularAreaCuadrado } from './ejercicios/ejercicio1';
import { sumarElementos } from './ejercicios/ejercicio2';
import { divididoPor5 } from './ejercicios/ejercicio3';
import { calcularPromedioCalificaciones } from './ejercicios/ejercicio4';

function App() {
  const [ladoCuadrado, setLadoCuadrado] = useState<number | undefined>();
  const [arreglo, setArreglo] = useState<string>('');
  const [resultadoArea, setResultadoArea] = useState<number | undefined>();
  const [resultadoSuma, setResultadoSuma] = useState<number | undefined>();

  const handleCalcularArea = () => {
    if (ladoCuadrado !== undefined) {
      setResultadoArea(calcularAreaCuadrado(ladoCuadrado));
    }
  };

  const handleSumarElementos = () => {
    const arregloNumeros = arreglo.split(',').map(Number);
    setResultadoSuma(sumarElementos(arregloNumeros));
  };

  const promedioCalificaciones = calcularPromedioCalificaciones([
    { name: 'Viviana', edad: 19, calificacion: 10 },
    { name: 'Wendy', edad: 20, calificacion: 8 },
    { name: 'Gerson', edad: 18, calificacion: 9 }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ejercicios de TypeScript</h1>
        <Acumulador />
        <div>
          <h2>Ejercicio 1: Área del Cuadrado</h2>
          <input
            type="number"
            placeholder="Ingrese el área del cuadrado"
            value={ladoCuadrado !== undefined ? ladoCuadrado : ''}
            onChange={(e) => setLadoCuadrado(parseFloat(e.target.value))}
          />
          <button onClick={handleCalcularArea}>Calcular Área</button>
          {resultadoArea !== undefined && (
            <p>Área del cuadrado: {resultadoArea}</p>
          )}
        </div>
        <div>
          <h2>Ejercicio 2: Suma de Elementos</h2>
          <input
            type="text"
            placeholder="Ingrese números separados por coma"
            value={arreglo}
            onChange={(e) => setArreglo(e.target.value)}
          />
          <button onClick={handleSumarElementos}>Sumar Elementos</button>
          {resultadoSuma !== undefined && (
            <p>Suma de los elementos: {resultadoSuma}</p>
          )}
        </div>
        <div>
          <h2>Ejercicio 3: División por 5</h2>
          <p>Valores divididos por 5: {divididoPor5.join(', ')}</p>
        </div>
        <div>
          <h2>Ejercicio 4: Promedio de Calificaciones</h2>
          <p>Promedio de las calificaciones: {promedioCalificaciones}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
