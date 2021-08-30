import React, { useState } from 'react';

// styles
import s from './InputField.module.css';

// takes a field name in kebab case, converts to plain text with spaces and the first letter capitalized
const createLabel = (name) => {
  let processedName = name.split('-').join(' ');
  return processedName.slice(0, 1).toUpperCase() + processedName.slice(1);
};

const InputField = ({ name, icon, handle, value }) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    handle(e.target.value);
    let value = parseFloat(e.target.value);
    // error checking

    if (e.target.value === '') {
      // checking for empty fields. Must do this before checking for NaN, because an empty string will also evaluate to NaN
      setError("Can't be empty");
    } else if (Number.isNaN(value)) {
      setError('Must be a number');
    } else if (value === 0) {
      setError("Can't be zero");
    } else {
      setError('');
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
        {icon}
        <input
          type="tel"
          className={error ? `${s.input} ${s.error}` : s.input}
          placeholder="0"
          id={name}
          value={value === 0 ? '' : value}
          onChange={handleChange}
          name={name}
        />
      </div>
    </div>
  );
};

export default InputField;
