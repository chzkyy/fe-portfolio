import React from 'react';
import './App.css';
import SisiKiri from './components/SisiKiri';
import SisiKanan from './components/SisiKanan';


const App = () => {
  return (
    <div className="container" data-aos="fade-in">
      <div className="row mobile">
        {/* sisi kiri */}
        <SisiKiri />

        {/* sisi kanan */}
        <SisiKanan />
      </div>
    </div>
  );
};

export default App;
