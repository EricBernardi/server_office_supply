const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

const config = {
    user: 'sa',                          
    password: process.env.PASSWORD_DB,             
    server: 'localhost',                 
    database: 'first',                   
    options: {
      encrypt: true,                     
      trustServerCertificate: true,      
    },
  };

  const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));
  
  module.exports = {
    sql, poolPromise
  }
  