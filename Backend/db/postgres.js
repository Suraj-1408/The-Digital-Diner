const { Pool } = require('pg');
require('dotenv').config();  // Load environment variables


const pool = new Pool({
    connectionString: process.env.POSTGRES_URI  // Use the connection string from the .env file

/*
user:'postgres',
host:'localhost',
database:'digitaldiner',
password:'12345',
port:'5432',
*/
});


pool.connect()

.then(() =>{
    console.log("Postgres Connection Successful!");
})

.catch(err =>{
    console.log("Connection to postgres Unsuccessful.",err.message);
    process.exit(1);
});

//eventEmitter that helps that connect to postgres.
pool.on('connect',()=>{
    console.log("Postgres Already Connected!");
});


module.exports = pool;