import React, { useState } from 'react';

// styles
import s from './FormSection.module.css';

// icons
import { ReactComponent as DollarIcon } from '../../images/icon-dollar.svg';
import { ReactComponent as PersonIcon } from '../../images/icon-person.svg';

// components
import InputField from '../../components/InputField';

const FormSection = ({ bill, setBill, tip, setTip, split, setSplit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={s.wrapper}>
      <form className={s.content} onSubmit={handleSubmit}>
        <div className={s.section}>
          <InputField
            name="bill"
            icon={<DollarIcon />}
            handle={setBill}
            value={bill}
          />
        </div>
        <div className={s.section}>
          <InputField
            name="number-of-people"
            icon={<PersonIcon />}
            handle={setSplit}
            value={split}
          />
        </div>
      </form>
    </div>
  );
};

export default FormSection;
