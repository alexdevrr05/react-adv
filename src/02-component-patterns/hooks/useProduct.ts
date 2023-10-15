import { useState } from 'react';

const useProduct = () => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    // evita numeros negativos, toma siempre el valor mayor
    setCounter((prev) => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};

export default useProduct;
