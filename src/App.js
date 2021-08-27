import React from 'react';

// components
import AppBox from './layout/AppBox';
import FormSection from './layout/FormSection';
import ResultSection from './layout/ResultSection';

function App() {
  return (
    <div className="site-wrapper">
      <header>
        <h1 className="site-title">
          <span>SPLI</span>
          <span>TTER</span>
        </h1>
      </header>
      <AppBox>
        <FormSection />
        <ResultSection />
      </AppBox>
    </div>
  );
}

export default App;
