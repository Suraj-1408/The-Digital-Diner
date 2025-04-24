import React ,{createContext,use,useState} from 'react';

//creating a context.
export const CartContext = createContext();

//creating a provider
export const CartProvider = ({children}) =>{
    const [cartItems,setCartItems] =   useState([]);

    //function ot add Item to cart.
    const addToCart = (item) =>{

        setCartItems(prevItems =>{

            //check if item already exist , increase the qty.
            const existingItem = prevItems.find(i => i._id === item._id);

            if(existingItem){
                return prevItems.map(
                    i => i._id === item._id ? {...i, quantity:i.quantity+1}:i
                );
            }

            //else, add new item wiht quantity 1.
            return [...prevItems,{...item,quantity:1}];
        });
    };


    //Remove item from cart.
    const removeFromCart = (id) =>{
        setCartItems(prevItems => prevItems.filter(item => item._id !== id));
    };


    //clear cart
    const clearCart = () =>{
        setCartItems([]);
    };


    //function to update item quantity.
    const increaseQuantity = (id) =>{
        setCartItems(prevItems =>
            prevItems.map((item) =>
                item._id === id ? {...item, quantity:item.quantity+1}:item
            )
        );
    };


    //function to decrese Quantity.
    const decreaseQuantity = (id) =>{
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item._id === id && item.quantity >1 ? {...item,quantity:item.quantity-1}:item
            ).filter((item) =>item.quantity > 0)
        );
    };

    return(
        <CartContext.Provider value = {{cartItems,addToCart,removeFromCart,clearCart,increaseQuantity,decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    );
};