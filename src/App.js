import React from 'react';

// components
import Layout from './components/Layout';
import Calculator from './components/Calculator';
import FormSection from './components/FormSection';
import ResultSection from './components/ResultSection';

// site logo
import Logo from './images/logo.svg';

function App() {
  return (
    <>
      <Calculator />
      <Layout logo={Logo}>
        <FormSection />
        <ResultSection />
      </Layout>
    </>
  );
}

export default App;
