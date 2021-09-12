import React from 'react';

// styles
import s from './TipChoice.module.css';

const createLabel = (value) => {
  const percent = value * 100;
  return percent.toString() + '%';
};

const TipChoice = ({ handle, value }) => {
  return (
    <li>
      <input
        type="radio"
        name="tip"
        id={createLabel(value)}
        className={s.hiddenInput}
        onClick={() => handle(value)}
      />
      <label htmlFor={createLabel(value)} className={s.button}>
        {createLabel(value)}
      </label>
    </li>
  );
};

export default TipChoice;
