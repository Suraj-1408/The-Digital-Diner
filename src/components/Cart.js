import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";
import {useNavigate} from "react-router-dom";
import './Cart.css';

const  Cart = () =>{

    const {cartItems,removeFromCart,clearCart,increaseQuantity,decreaseQuantity} = useContext(CartContext);
    const navigate = useNavigate();


    const totalPrice = cartItems.reduce((sum,item) =>sum + item.price * item.quantity,0);

    return(
        <div  className="cart-container">
            <h2 className="cart-title">Your CART</h2>
            {cartItems.length === 0?(
                <p className="cart-empty">Your Cart is Empty</p>
            ):(
                <div>
                    <ul className="cart-list">
                        {
                            cartItems.map(item =>(
                                <li className="cart-item" key = {item._id}>
                                    <p>
                                    <strong>{item.name}</strong> - ₹{item.price} &nbsp;&nbsp;
                                    
                                    <span >Quantity:</span>

                                    <span className="quantity-controls">
                                    <button onClick = {()=> decreaseQuantity(item._id)}> - </button><span>{item.quantity}</span>
                                    <button onClick = {()=> increaseQuantity(item._id)}> + </button>
                                    </span>

                                    <br/>

                                    <button onClick={() =>removeFromCart(item._id)}>Remove</button>
                                    </p>

                                </li>
                            ))}
                    </ul>
                    <h3 className="total-price">Total Price:₹{totalPrice}</h3>
                    
                    <div className="cart-buttons">
                    <button onClick={clearCart}>Clear Cart</button>

                    <button onClick={()=> navigate('/place-order')} style = {{marginLeft:'10px'}}>
                        Place Order
                    </button>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Cart;