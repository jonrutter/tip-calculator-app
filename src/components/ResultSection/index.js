import React from 'react';

import { useGlobalContext } from '../../context';

// styles
import s from './ResultSection.module.css';

const ResultSection = () => {
  const { personTip, personTotal, canReset, resetForm } = useGlobalContext();

  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <section className={s.row}>
          <div className={s.col}>
            <h2 className={s.title}>Tip Amount</h2>
            <p className={s.subtitle}>/ person</p>
          </div>
          <div className={s.col}>
            <span className={s.price}>${personTip}</span>
          </div>
        </section>
        <section className={s.row}>
          <div className={s.col}>
            <h2 className={s.title}>Total</h2>
            <p className={s.subtitle}>/ person</p>
          </div>
          <div className={s.col}>
            <span className={s.price}>${personTotal}</span>
          </div>
        </section>

        <button
          onClick={resetForm}
          className={!canReset ? `${s.resetBtn} ${s.disabled}` : s.resetBtn}
          disabled={!canReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ResultSection;
