// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FormProvider } from './context/FormContext';
import Home from './pages/Home';
import Success from './pages/Success';

const App = () => (
  <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  </FormProvider>
);

export default App;
