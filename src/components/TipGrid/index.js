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
        <TipChoice value={0.15} callback={callback} tip={tip} />
        <TipChoice value={0.18} callback={callback} tip={tip} />
        <TipChoice value={0.2} callback={callback} tip={tip} />
        <TipChoice value={0.22} callback={callback} tip={tip} />
        <TipChoice value={0.25} callback={callback} tip={tip} />
        <CustomTipChoice callback={callback} tip={tip} />
      </ul>
    </div>
  );
};

export default TipGrid;
