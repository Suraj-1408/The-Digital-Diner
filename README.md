# 🍽️ Digital Diner

A simple and clean food ordering web application built with React, Node.js, Express, PostgreSQL, and MongoDB.


## 🚀 Features Implemented

### 🧾 Digital Menu
- Loads menu from MongoDB
- Displays item name, description, price

### 🛒 Cart
- Add/remove menu items with quantity
- Calculates total price
- Clear cart after order placement

### 📦 Place Order
- Enter name and phone number
- Sends cart data to `/api/orders` via POST
- Saves to PostgreSQL `orders` and `order_items` tables

### 📖 Order History
- Users enter phone number
- Retrieves past orders with items and totals from PostgreSQL
- Shows complete history of multiple orders

---

## ⚙️ Backend APIs

**Base URL:** `http://localhost:4000`

### **Menu (MongoDB)**
- `GET /api/menu` — Get all menu items

### **Orders (PostgreSQL)**
- `POST /api/orders` — Place a new order  


---

## Project Deployement Link - https://digitaldiner-web.netlify.app/ 

## User Interface

### Menu Page
![Menu Page](assets/MenuItemPage.png)

### Adding Menu Item to Cart
![AddingMenuItem](assets/AddingMenuItem.png)

### Adding Menu Item to Cart
![AddingMenuItem](assets/AddingMenuItem.png)

### Cart
![EmptyCart](assets/EmptyCart.png)

### Cart With Items
![CartWithItems](assets/CartWithItems.png)


### Place Order Page
![Place Order](assets/PlaceOrderPage.png)

### Successfully Order Placed
![Place Order](assets/SuccessfullOrderPlacing.png)


### Order History Page
![OrderHistoryPage](assets/OrderHistoryPage.png)

### Order History Detail
![OrderHistoryPage](assets/OrderHistoryDetails.png)


# How to run the Application.

### Clone the repository. 
```
git clone https://github.com/Suraj-1408/The-Digital-Diner.git
cd Backend
```

# Backend SetUp 
### Navigate to Backend Folder using  
``` cd Backend ```

### Install Dependencies  
``` npm install ```

### Create .env file with your database credentials  
```
  DB_URI=postgresql://postgres:password@localhost:5432/digital_diner
  MONGO_URI=mongodb://localhost:27017/digitaldiner
  PORT=4000
```

### Create database & relations in PostgreSQL 
1)Create database 
```
  create database digitaldiner;
  \c digitaldiner;
```

2)Create orders relation 
```
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(15),
    order_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

3)Create order_items relation 
```
CREATE TABLE IF NOT EXISTS order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    item_name VARCHAR(100),
    quantity INT,
    price NUMERIC(10, 2)
);
```

### Similarly create a database digitaldiner in mongodb with collection name as menuitems.  
1)Inside you mongodb shell create database      
```
 use digitaldiner 
```

2)Insert records into collection menuitems.(Note - Before inserting record have a look at menu_item model)      
```
  db.createCollection('menuitems');
  db.menuitems.insertMany([...]);
```

### At Last Execute Backend in one terminal     
```
node index.js
```

## Start Frontend in new terminal   
1)Navigate to newfrontend    
```
 cd newfrontend
```  
2) Install Dependencies     
```
  npm start  
```  

3) Execute newfrontend    
```
  npm start
```
