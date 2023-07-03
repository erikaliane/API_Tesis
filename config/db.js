const mongoose = require("mongoose");
require('dotenv').config();



const conectarDB = async () => {
  try {
    await mongoose.connect( process.env.DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });
    console.log(`BD conectada`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectarDB;
