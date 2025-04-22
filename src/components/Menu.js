import React , {useContext, useEffect,useState} from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const Menu = () => {
    const [menuItems,setMenuItems] = useState([]);
    const [groupedMenu,setGroupedMenu] = useState({});
    const { addToCart } = useContext(CartContext);    //useing addToCart from context.
    const [message,setMessage] = useState("");      //using this useState to display message when item added

    useEffect(() =>{
        axios.get('http://localhost:4000/api/menu')

        .then(response =>{
            //setMenuItems(response.data);
            //const grouped = groupByCategory(response.data);
            setGroupedMenu(response.data);
        })

        .catch(error =>{
            console.error('Error fetching menu items:',error);
        });
    },[]);


    //using useEffect for message displaying.
    useEffect(()=>{
      
      if(message){
        const timer = setTimeout(() => setMessage(''),3000);
        return ()=> clearTimeout(timer);
      }
    },[message]);

    const handleAddToCart = (item) =>{
      addToCart(item);
      setMessage(`${item.name} added to Cart!`);
    };

    return (
        <div>
          <h2>Menu</h2>
          {message && <div style = {{color:'green',marginBottom:'5px'}}>{message}</div>}
          {Object.keys(groupedMenu).map(category => (
            <div key={category}>
              <h3>{category}</h3>
              <ul>
                {groupedMenu[category].map(item => (
                  <li key={item._id}>
                    <strong>{item.name}</strong> - ₹{item.price}
                    <p>{item.description}</p>
                    <small>{item.availability ? 'Available' : 'Not Available'}</small>
                    <br/>

                    <button onClick ={ ()=> handleAddToCart(item)}>Add to Cart</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
};

export default Menu;
