// import logo from './logo.svg';
import './App.css';
import SisiKiri from './components/SisiKiri';
import SisiKanan from './components/SisiKanan';


function App() {
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
}

export default App;
