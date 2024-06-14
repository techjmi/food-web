import './App.css';
import { Button } from "flowbite-react";
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import PlaceOrder from './components/PlaceOrder';
// import Home from './components/Home';
// import Navbar from './components/Header.jsx';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/'element={ <Home />}/>
      <Route path='/cart'element={<Cart />} />
      <Route path='/placeorder'element={<PlaceOrder />} />
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
