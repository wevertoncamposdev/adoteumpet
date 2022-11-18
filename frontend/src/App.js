import logo from './logo.png';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ADOTE UM PET
        </p>
      </header>
      <Footer/>
    </div>
    
  );
}

export default App;
