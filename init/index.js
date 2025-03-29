const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/anbwebsite";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner:"67bd717ee67b2ab87125ac05"}));
    
    // Ensure 'image' is stored as a URL string
    const formattedData = initData.data.map(listing => ({
      ...listing,
      image: typeof listing.image === "object" ? listing.image.url : listing.image
    }));

    await Listing.insertMany(formattedData);
    console.log("Data was initialized successfully");
  } catch (err) {
    console.error("Error initializing DB:", err);
  } finally {
    mongoose.connection.close(); // Close DB connection after execution
  }
};

initDB();
