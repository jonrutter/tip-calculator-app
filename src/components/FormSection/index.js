import React from 'react';

import { useGlobalContext } from '../../context';

// styles
import s from './FormSection.module.css';

// icons
import DollarIcon from '../../images/icon-dollar.svg';
import PersonIcon from '../../images/icon-person.svg';

// components
import InputField from '../InputField';
import TipGrid from '../TipGrid';

const FormSection = () => {
  const { bill, tip, split, dispatch } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const create = (type) => (amount) => ({
    type: `UPDATE_${type}`,
    payload: amount,
  });

  const billUpdate = create('BILL');
  const splitUpdate = create('SPLIT');
  const tipUpdate = create('TIP');

  const send = (creator) => (amount) => dispatch(creator(amount));

  return (
    <div className={s.wrapper}>
      <form className={s.content} onSubmit={handleSubmit} noValidate>
        <div className={s.section}>
          <InputField
            name="bill"
            icon={DollarIcon}
            callback={send(billUpdate)}
            value={bill}
            min={0}
            step={0.01}
          />
        </div>
        <div className={s.section}>
          <TipGrid tip={tip} callback={send(tipUpdate)} />
        </div>
        <div className={s.section}>
          <InputField
            name="number-of-people"
            icon={PersonIcon}
            callback={send(splitUpdate)}
            value={split}
          />
        </div>
      </form>
    </div>
  );
};

export default FormSection;
