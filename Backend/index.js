const  express = require('express');
const cors = require('cors');

//importing db's
//const connectMongoDB = require('./db/mongo.js');
require('./db/mongo.js');
//const pool = require('./db/postgres.js');
require('./db/postgres.js');
const menuRoutes = require('./routes/menuRoutes');
const orderRoutes = require('./routes/orderRoutes');


const app = express();

//(important for frontend to talk to backend)
//app.use(cors());
app.use(cors({
    origin: 'https://digitaldiner-web.netlify.app/', //frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true, // optional: if your frontend sends cookies or other credentials
}));


//Middleware to parse JSON
app.use(express.json());


//creating index or home page
app.get('/',(req,res) =>{
    //console.log("Welcome to Digital Diner API");
    res.send("Welcome to Digital Diner API");
}); 

//API route for menu items
app.use('/api/menu', menuRoutes);
app.use('/api/orders',orderRoutes);

//allocating port for it.
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}/`);
});