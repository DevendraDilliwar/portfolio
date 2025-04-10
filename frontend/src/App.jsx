import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cse from './components/Academic/CSE/Cse';
import Ece from './components/Academic/EEE/Cse';
import Mech from './components/Academic/ME/Cse';
import Civil from './components/Academic/CE/Cse';
import Aids from './components/Academic/AIDS/Cse';
import Mechatronic from './components/Academic/MECHATRONIC/Cse';
import It from './components/Academic/IT/Cse';


const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<h1>Welcome to the Academic Portal</h1>} /> */}
        <Route path="/" element={<Cse />} />
        <Route path="/ece" element={<Ece />} />
        <Route path="/mech" element={<Mech />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/aids" element={<Aids />} />
        <Route path="/mechatronic" element={<Mechatronic />} />
        <Route path="/it" element={<It />} />
      </Routes>
    </Router>
  );
};

export default App;