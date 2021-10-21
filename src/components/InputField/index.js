import React, { useState, useEffect } from 'react';

// styles
import s from './InputField.module.css';

// takes a field name in kebab case, converts to plain text with spaces and the first letter capitalized
const createLabel = (name) => {
  let processedName = name.split('-').join(' ');
  return processedName.slice(0, 1).toUpperCase() + processedName.slice(1);
};

const InputField = ({ name, icon, callback, value, min = 1, step = 1 }) => {
  const [input, setInput] = useState(value);
  const [error, setError] = useState('');

  useEffect(() => {
    setInput(value);
  }, [value]);

  const handleChange = (e) => {
    let value = parseFloat(e.target.value);

    // error checking
    if (e.target.value === '') {
      // checking for empty fields. Must do this before checking for NaN, because an empty string will also evaluate to NaN
      setError('Please enter a number');
      setInput('');
    } else if (Number.isNaN(value)) {
      setError('Please enter a number');
    } else if (value === 0) {
      setError('Please enter a number');
      setInput(e.target.value);
    } else {
      setError('');
      setInput(e.target.value);
      callback(value);
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.labelWrapper}>
        <label className={s.label} htmlFor={name}>
          {createLabel(name)}
        </label>
        {error && <p className={s.errorMsg}>{error}</p>}
      </div>

      <div className={s.inputWrapper}>
        <img src={icon} alt="" className={s.icon} />
        <input
          formNoValidate
          type="number"
          className={error ? `${s.input} ${s.error}` : s.input}
          placeholder="0"
          id={name}
          value={input}
          onChange={handleChange}
          name={name}
          required
          min={min}
          step={step}
        />
      </div>
    </div>
  );
};

export default InputField;
