import React,{useState} from "react";



function OrderHistory(){
    const [phone,setPhone] = useState();
    const [orders,setOrders] = useState([]);


    const fetchOrders = async()=>{
        if (!phone || !phone.trim()) {
            alert("Please enter a phone number.");
            return;
        }

        try{
            //const response = await fetch(`http://localhost:4000/api/orders/${phone}`);
            const response = await fetch(`https://the-digital-diner.onrender.com/api/orders/${phone}`);

            if (!response.ok) {
                throw new Error("Order not found or server error");
            }
            const data = await response.json();
            console.log("📦 Orders fetched:", data); // <--- Add this
   
            setOrders(data);
        }catch(err){
            alert("Error fetching  Orders");
        }
    };


    return (
        <div>
            <h2>Order History</h2>

            <input
            type="text"
            placeholder= "Enter Phone Number"
            value = {phone }
            onChange= {(e)=>setPhone(e.target.value)}
            />

            <button onClick ={fetchOrders}>View Orders</button>

            {orders.length > 0 && (
                <ul>
                    {orders.map((order,index) =>(
                        <li key={index}>
                            <strong>Name:</strong>{order.name}<br/>
                            <strong>Items:</strong>{order.cart?.map((item) =>  item.item_name).join(",")}<br/>
                            <strong>Total:</strong> ₹{order.total}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default OrderHistory;