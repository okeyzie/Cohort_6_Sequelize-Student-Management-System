const express = require('express');
const PORT = 8080;
const sequelize = require("./database/database");
const router = require('./routes/studentRouter');

const app = express();
app.use(express.json());

app.use(router);

const startServer = async ()=>{
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error.message);
}}

startServer()



app.listen(PORT, ()=> {
    console.log(`Server is running on PORT: ${PORT}`);
    
})