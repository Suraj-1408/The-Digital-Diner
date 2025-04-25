const { Pool } = require('pg');
require('dotenv').config();  // Load environment variables


console.log('Postgres URI:', process.env.POSTGRES_URI);

const pool = new Pool({
    connectionString: process.env.POSTGRES_URI,
    ssl: {
        rejectUnauthorized: false // This will allow the connection even if the certificate isn't verified (not recommended for production)
    }
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