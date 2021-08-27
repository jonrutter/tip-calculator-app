import React from 'react';

// styles
import s from './AppBox.module.css';

const AppBox = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <main className={s.content}>{children}</main>
    </div>
  );
};

export default AppBox;
