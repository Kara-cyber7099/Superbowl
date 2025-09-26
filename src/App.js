import React from 'react';
import {Router, Route, Routes} from 'react-router-dom';

import Index from './pages/Index';
import RedButtonPage from './pages/RedButtonPage';
import StageVisualDesignPage from './pages/StageVisualDesignPage';
import CostumesDancersPage from './pages/CostumesDancersPage';
import SpokenWordsPage from './pages/SpokenWordsPage';
import CulturalSymbolsPage from './pages/CulturalSymbolsPage';
import SocialMediaPage from './pages/SocialMediaPage';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (

    <React.Fragment>
      <Navbar />
 
      <Routes>
        <Route index path="/Superbowl" element={<Index />} />
        <Route path="/red-button-and-new-orleans" element={<RedButtonPage />} />
        <Route path="/stage-and-visual-design" element={<StageVisualDesignPage />} />
        <Route path="/costumes-and-dancers" element={<CostumesDancersPage />} />
        <Route path="/spoken-words" element={<SpokenWordsPage />} />
        <Route path="/cultural-and-political-symbols" element={<CulturalSymbolsPage />} />
        <Route path="/social-media-and-aftermath" element={<SocialMediaPage />} />
        {/* <Route path="/" element={<null />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
