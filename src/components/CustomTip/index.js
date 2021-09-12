import React, { useState } from 'react';

// styles
import s from './CustomTip.module.css';

const CustomTip = ({ handle }) => {
  const [checked, setChecked] = useState(false);
  const [tip, setTip] = useState('');

  const handleClick = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
  };

  const handleChange = (e) => {
    setTip(Math.floor(e.target.value / 100));
    handle(tip);
  };

  return (
    <li className={s.wrapper}>
      <input
        type="radio"
        name="tip"
        id="custom-tip"
        className={s.hiddenInput}
        onClick={handleClick}
      />
      <label htmlFor="custom-tip" className={s.button}>
        {checked ? (
          <input
            type="text"
            className={s.input}
            value={tip}
            onChange={handleChange}
          />
        ) : (
          'Custom'
        )}
      </label>
    </li>
  );
};

export default CustomTip;
