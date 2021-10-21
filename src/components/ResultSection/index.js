import React from 'react';

import { useGlobalContext } from '../../context';

// components
import ResetButton from '../ResetButton';

// styles
import s from './ResultSection.module.css';

const ResultSection = () => {
  const { personTip, personTotal } = useGlobalContext();

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

        <ResetButton />
      </div>
    </div>
  );
};

export default ResultSection;
