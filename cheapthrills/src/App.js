import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './home';
import GetStartedPage from './getStarted';
import FirstLandingpage from './firstLandingpage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/somya121/cheapthrills" element={<HomePage />} />
        <Route path="/getStarted" element={<GetStartedPage />} />
        <Route path="/firstLandingpage" element={<FirstLandingpage />} />
      </Routes>
    </Router>
  );
}

export default App;
