import React,{useContext} from "react";
import { CartContext } from "../context/CartContext";


const  Cart = () =>{

    const {cartItems,removeFromCart,clearCart,increaseQuantity,decreaseQuantity} = useContext(CartContext);


    const totalPrice = cartItems.reduce((sum,item) =>sum + item.price * item.quantity,0);

    return(
        <div>
            <h2>Your CART</h2>
            {cartItems.length === 0?(
                <p>Your Cart is Empty</p>
            ):(
                <div>
                    <ul>
                        {
                            cartItems.map(item =>(
                                <li key = {item._id}>
                                    <p>
                                    <strong>{item.name}</strong> - ₹{item.price} &nbsp;&nbsp;
                                    
                                    <span>Quantity:</span>
                                    <button onClick = {()=> decreaseQuantity(item._id)}> - </button><span>{item.quantity}</span>
                                    <button onClick = {()=> increaseQuantity(item._id)}> + </button>
                                    <br/>

                                    <button onClick={() =>removeFromCart(item._id)}>Remove</button>
                                    </p>

                                </li>
                            ))}
                    </ul>
                    <h3>Total Price:₹{totalPrice}</h3>
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;