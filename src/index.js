
import App from './App';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container);

const baseName = process.env.REACT_APP_BASE_URL || '/';

root.render(
  <React.StrictMode>
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

