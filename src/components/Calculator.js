import { useEffect, useCallback } from 'react';
import { useGlobalContext } from '../context';

const Calculator = () => {
  const { bill, tip, split, dispatch } = useGlobalContext();

  const calculateCreator = () => ({
    type: 'CALCULATE_TOTAL',
  });

  const calculate = useCallback(() => {
    dispatch(calculateCreator());
  }, [dispatch]);

  useEffect(() => {
    calculate();
  }, [bill, tip, split, calculate]);
  return null;
};

export default Calculator;
