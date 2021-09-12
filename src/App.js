import React, { useState } from 'react';

// components
import AppBox from './layout/AppBox';
import FormSection from './layout/FormSection';
import ResultSection from './layout/ResultSection';

function App() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [split, setSplit] = useState(0);

  const resetForm = () => {
    setBill(0);
    setSplit(0);
  };

  return (
    <div className="site-wrapper">
      <header>
        <h1 className="site-title">
          <span>SPLI</span>
          <span>TTER</span>
        </h1>
      </header>
      <AppBox>
        <FormSection
          bill={bill}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          split={split}
          setSplit={setSplit}
        />
        <ResultSection
          bill={bill}
          tip={tip}
          split={split}
          resetForm={resetForm}
        />
      </AppBox>
    </div>
  );
}

export default App;
