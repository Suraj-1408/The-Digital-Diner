const express = require('express');
const router = express.Router();
const pool = require('../db/postgres.js');



//creating BAckend API Endpoint for order.
router.post('/',async(req,res) =>{

    console.log("🟢 POST /api/order hit"); // <--- Add this line

    const {name,phone,items:cartItems} = req.body;


    if(!name ||!phone || !cartItems?.length){
        return res.status(400).json({message:'Incomplete Order data.'});
    }

    try{

        const client = await pool.connect();

        //start Transaction
        await client.query('BEGIN');

        const insertOrderText =  'Insert into orders(name,phone) values($1,$2) returning id';
        const {rows} = await client.query(insertOrderText,[name,phone]);
        const orderId = rows[0].id;


        const insertItemText = `
            Insert into order_items(order_id,item_name,quantity,price) values ($1,$2,$3,$4);
        `;


        for(const item of cartItems){
            await client.query(insertItemText,[orderId,item.name,item.quantity,item.price]);
        }

        //commiting Transaction
        await client.query('COMMIT');
        client.release();

        res.status(201).json({message:'Order placed successfully!',orderId});
    }

    catch(err){
        console.error(err);
        res.status(500).json({message:'Server Error Try again later.'});
    }
});



//route to get order history uisng phone number as parameter.
router.get('/:phone', async (req, res) => {
    const { phone } = req.params;
  
    try {
      // Get all orders by phone
      const ordersResult = await pool.query(
        'SELECT * FROM orders WHERE phone = $1',
        [phone]
      );
  
      const orders = ordersResult.rows;
  
      // Fetch items for each order
      for (const order of orders) {
        const itemsResult = await pool.query(
          'SELECT item_name, quantity, price FROM order_items WHERE order_id = $1',
          [order.id]
        );
        order.cart = itemsResult.rows;
  
        // Calculate total
        order.total = order.cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
      }
  
      res.json(orders);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server Error' });
    }
});
  
module.exports = router;