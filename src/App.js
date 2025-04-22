import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import Menu from './components/Menu';
import Cart from './components/Cart';

import { CartProvider } from './context/CartContext';

import './App.css';

function App() {
  return (

    <CartProvider>
      <Router>
    <div className="App">
      
        <h1>Welcome to Digital Diner</h1>
        <nav>
        <Link to="/">Menu</Link> | <Link to="/cart">View Cart</Link>
        </nav>


        <Routes>
          <Route path = "/" element ={<Menu/>}/>
          <Route path = "/cart" element ={<Cart/>}/>
          
        </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
