import React from 'react';

// styles
import s from './Layout.module.css';

const Layout = ({ logo, children }) => {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        <img src={logo} alt="Splitter" className={s.logo} />
      </header>
      <main className={s.main}>
        <div className={s.content}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
