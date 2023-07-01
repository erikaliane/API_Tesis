const mongoose = require("mongoose");


const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://brigittrujillo:1234@cluster0.tmcoio0.mongodb.net/?retryWrites=true&w=majority", {
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
