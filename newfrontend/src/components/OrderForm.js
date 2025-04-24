import axios from 'axios';
import {useState,useContext} from 'react';
import { CartContext } from '../context/CartContext';
import {Link} from "react-router-dom";
import './OrderForm.css';

const OrderForm = () =>{
    const {cartItems,clearCart} =  useContext(CartContext);
    const [name,setName] = useState('');
    const [phone,setPhone]  = useState('');


    const  handleSubmit = async(e) =>{
        e.preventDefault();


        try{
            await axios.post('http://localhost:4000/api/orders',{
                name,
                phone,
                items:cartItems
            });

            alert("Order Placed successfully!");
            clearCart();
            setName('');
            setPhone('');

        }catch(err){
            alert("Error while placing Order.");
        }
    };



    return(
    <div className="order-form-container">

        <h2 className="order-form-title">Confirm Your Order</h2>
        <form onSubmit={handleSubmit}>
        
        <div className="order-form-group">
           <label>Enter Your Name:</label>
            <input value = {name} 
                    onChange={e =>setName(e.target.value)} 
                    placeholder="Name" 
                    required style={{ padding: '5px' }}/>
        </div>

        <div className="order-form-group">

           <label style={{ width: '120px' }}>Phone Number:</label> 
           <input value = {phone} 
                    onChange = {e => setPhone(e.target.value)}
                    placeholder='Phone Number' 
                    required style={{ padding: '5px' }}/>
        </div>

            <button type="submit" className="order-form-button">Place Order</button>
        </form>

        <Link to="/cart" className="order-form-backlink">Go Back</Link> | <Link to="/order-history">View Order</Link>

    </div>
    );
};

export default OrderForm;