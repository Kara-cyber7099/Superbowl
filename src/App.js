import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (

    <React.Fragment>
      <Navbar />
 
      <Router>
        <Routes>
          <Route path="/" element={<null />} />
          <Route path="/" element={<null />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
