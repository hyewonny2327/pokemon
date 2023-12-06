import React from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import StartPage from './StartPage';
import MainPage from './MainPage';
import ResultPage from './ResultPage';
import Adventure from './Adventure';

function App() {
  return (
    <div>
      <Routes >
        <Route path="/" element={<StartPage />} />
        <Route path="/draw" element={<MainPage/>} />
        <Route path="/result" element={<ResultPage/>} />
        <Route path="/adventure" element={<Adventure/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;

