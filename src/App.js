import './App.css';
import { Button } from "flowbite-react";
import Header from './components/Header';
import Home from './pages/Home';
// import Home from './components/Home';
// import Navbar from './components/Header.jsx';

function App() {
  return (
    <div className="App">
     <Header/>
     <Home />
    </div>
  );
}

export default App;
