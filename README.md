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
# Start Backend in terminal
cd Backend
node index.js

# Start Frontend in new terminal
cd newfrontend
npm start
