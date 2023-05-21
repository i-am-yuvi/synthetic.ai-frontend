// Routes.js
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Generated from './Generated';

function Routes() {
  return (
    <RouterRoutes>
        <Route path="/" element={<App />} index />
        <Route path="/home" element={<Home />} />
        <Route path='/generated' element={<Generated />}/>
    </RouterRoutes>
  );
}

export default Routes;
