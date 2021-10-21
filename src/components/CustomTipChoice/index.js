import React, { useState } from 'react';

// styles
import s from './CustomTipChoice.module.css';

const toPercent = (num) => Math.floor(num * 100);
const toDecimal = (num) => (num / 100).toFixed(2);

const CustomTipChoice = ({ callback, tip }) => {
  const [active, setActive] = useState(false);
  // maintain input state in percent format (to improve UI), transform to decimal when updating application state
  const [input, setInput] = useState(toPercent(tip));

  const handleChange = (e) => {
    // make sure input is an int
    const value = parseInt(e.target.value);
    if (Number.isNaN(value)) {
      // if input not an int: set to empty string
      console.log('NAN');
      setInput('');
    } else {
      setInput(value);
      callback(toDecimal(value));
    }
  };

  return (
    <li className={s.wrapper}>
      {active && (
        <div className={s.active}>
          <input
            type="number"
            min="1"
            max="100"
            step="1"
            className={s.input}
            value={input}
            onChange={handleChange}
            onFocus={handleChange}
          />
        </div>
      )}
      <button className={s.button} onClick={() => setActive(true)}>
        Custom
      </button>
    </li>
  );
};

export default CustomTipChoice;
