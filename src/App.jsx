import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Program from './components/Program';
import JaViElsker from './components/JaViElsker';
import Nordmannen from './components/Nordmannen';
import GudSigne from './components/GudSigne';
import DetGarEitFesttog from './components/DetGarEitFesttog';
import './components/Layout.css';

const theme = 'theme-norwegian';
// Use 'theme-mono' for the simple black/white/grey style.

function App() {
  useEffect(() => {
    document.documentElement.className = theme;
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Program />} />
          <Route path="/ja-vi-elsker" element={<JaViElsker />} />
          <Route path="/nordmannen" element={<Nordmannen />} />
          <Route path="/gud-signe-vart-dyre-fedreland" element={<GudSigne />} />
          <Route path="/det-gar-eit-festtog-gjennom-landet" element={<DetGarEitFesttog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
