import React from 'react';

// styles
import s from './TipChoice.module.css';

const createLabel = (value) => {
  const percent = value * 100;
  return percent.toString() + '%';
};

const TipChoice = ({ callback, value, tip }) => {
  return (
    <li>
      <button
        className={tip === value ? `${s.button} ${s.active}` : s.button}
        onClick={() => callback(value)}
      >
        {createLabel(value)}
      </button>
    </li>
  );
};

export default TipChoice;
