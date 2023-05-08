// Routes.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import App from './App';
import Home from './Home';

function Routes() {
  return (
    <RouterRoutes>
        <Route path="/" element={<App />} index />
        <Route path="/home" element={<Home />} />
    </RouterRoutes>
  );
}

export default Routes;
