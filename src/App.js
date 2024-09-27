import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import SideBar from './SideBar/SideBar';
import Header from './Header/Header';
import Body from './Body/Body';

function App() {
  return (
    <div className="App-container">
      <SideBar />
      <Header />
      <Body />

      <Routes>
        <Route exact path="/contact" element={<div>Contact Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
