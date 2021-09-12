import React from 'react';

// styles
import s from './FormSection.module.css';

// icons
import { ReactComponent as DollarIcon } from '../../images/icon-dollar.svg';
import { ReactComponent as PersonIcon } from '../../images/icon-person.svg';

// components
import InputField from '../../components/InputField';
import TipChoice from '../../components/TipChoice';
import CustomTip from '../../components/CustomTip';

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
        <fieldset className={s.section}>
          <legend className={s.label}>Select tip %</legend>
          <ul className={s.tipGrid}>
            <TipChoice value={0.15} handle={setTip} />
            <TipChoice value={0.18} handle={setTip} />
            <TipChoice value={0.2} handle={setTip} />
            <TipChoice value={0.22} handle={setTip} />
            <TipChoice value={0.25} handle={setTip} />
            <CustomTip handle={setTip} />
          </ul>
        </fieldset>
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
