import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link,useLocation} from 'react-router-dom';

import Menu from './components/Menu';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import OrderHistory from './components/OrderHistory';


import { CartProvider } from './context/CartContext';

import './App.css';


const AppContent = () =>{
  const location = useLocation();

  return (
    <div className = "App">
      
      {location.pathname !== '/place-order' && (
        <>
          <h1 className="main-heading">Welcome to Digital Diner</h1>

          <p className="intro-text">
            Explore a diverse menu, choose your favorites, and place orders in just few clicks.Order Your Favorite Meals Online,Fast, Easy, Delicious!
          </p>
          
          <nav>
            <Link to="/">Menu</Link> | <Link to="/cart">View Order</Link> |  <Link to="/order-history">My Orders</Link>
          </nav>
        </>
      )}

      <Routes>
        <Route path="/" element ={<Menu/>} />
        <Route path = "/cart" element={<Cart/>}/>
        <Route path ="/place-order" element={<OrderForm/>} />
        <Route path="/order-history" element={<OrderHistory/>} />
      </Routes>
    </div>
  );
};





function App() {
  
  return (

    <CartProvider>
      <Router>
        <AppContent/>
      </Router>
    </CartProvider>
  );
};

export default App;
