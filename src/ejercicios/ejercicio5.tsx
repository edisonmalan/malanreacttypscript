import React, { useState } from 'react';

const Acumulador: React.FC = () => {
  const [valor, setValor] = useState<number>(5);

  const incrementar = () => {
    setValor(prevValor => prevValor + 5);
  };

  const disminuir = () => {
    setValor(prevValor => prevValor - 5);
  };

  return (
    <div>
      <h2>Acumulador</h2>
      <p>Valor del acumulador: {valor}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={disminuir}>Disminuir</button>
    </div>
  );
};

export default Acumulador;
