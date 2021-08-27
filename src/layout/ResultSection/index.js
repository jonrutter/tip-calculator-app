import React from 'react';

// styles
import s from './ResultSection.module.css';

const ResultSection = ({
  tipAmount = '0.00',
  total = '0.00',
  formIsEmpty = true,
  resetForm,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <section className={s.row}>
          <div className={s.col}>
            <h2 className={s.title}>Tip Amount</h2>
            <p className={s.subtitle}>/ person</p>
          </div>
          <div className={s.col}>
            <span className={s.price}>${tipAmount}</span>
          </div>
        </section>
        <section className={s.row}>
          <div className={s.col}>
            <h2 className={s.title}>Total</h2>
            <p className={s.subtitle}>/ person</p>
          </div>
          <div className={s.col}>
            <span className={s.price}>${total}</span>
          </div>
        </section>
        <button
          onClick={resetForm}
          className={formIsEmpty ? `${s.resetBtn} ${s.disabled}` : s.resetBtn}
          disabled={formIsEmpty}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ResultSection;
