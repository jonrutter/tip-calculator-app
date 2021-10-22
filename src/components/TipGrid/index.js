import React from 'react';

// styles
import * as s from './TipGrid.module.css';

// components
import TipChoice from '../TipChoice';
import CustomTipChoice from '../CustomTipChoice';

const TipGrid = ({ tip, callback }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.label}>Select tip %</p>
      <ul className={s.tipGrid}>
        {[0.15, 0.18, 0.2, 0.22, 0.25].map((value, index) => (
          <TipChoice key={index} value={value} callback={callback} tip={tip} />
        ))}
        <CustomTipChoice callback={callback} tip={tip} />
      </ul>
    </div>
  );
};

export default TipGrid;
