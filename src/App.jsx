import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MuseumDetail from './pages/MuseumDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="antialiased text-gray-900 selection:bg-indigo-300 selection:text-indigo-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/museum/:id" element={<MuseumDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
