import React from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router";
import DogImage from './components/DogImage/DogImage';
import StatusCodeInput from './components/StatusCodeInput/StatusCodeInput';
const App = () => {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <h1>HTTP Status Dog Image Fetcher</h1>
        <Routes>
          <Route path="/" element={<StatusCodeInput />} />
          <Route path="/:statusCode" element={<DogImage />} />
        </Routes>
        <Link to="/404">Not found dog</Link>

      </div>
    </BrowserRouter>
  );
};

export default App;
