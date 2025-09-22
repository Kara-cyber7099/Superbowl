import React from 'react';
import {Router, Route, Routes} from 'react-router-dom';

import Index from './pages/Index';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (

    <React.Fragment>
      <Navbar />
 
      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/" element={<null />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
