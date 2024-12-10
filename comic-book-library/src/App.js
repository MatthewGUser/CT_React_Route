import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';          // Correct path to Home
import BrowseCharacters from './components/BrowseCharacters'; 
import CharacterDetails from './components/CharacterDetails'; 
import Comics from './components/Comics';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-characters" element={<BrowseCharacters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all for undefined routes */}
      </Routes>
    </Router>
  );
}

export default App;
