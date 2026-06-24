require("dotenv").config();

const mongoose = require("mongoose");
const Cafe = require("./models/Cafe");

mongoose.connect(process.env.MONGO_URI)
.then(async () => {

  await Cafe.deleteMany();

  await Cafe.insertMany([
    {
      name: "Blue Tokai",
      location: "Gurgaon",
      rating: 4.6,
      price: "₹₹",
      description: "Specialty coffee and cozy atmosphere",
      image: "https://picsum.photos/300/200?1"
    },
    {
      name: "Third Wave Coffee",
      location: "Delhi",
      rating: 4.4,
      price: "₹₹",
      description: "Freshly roasted coffee beans",
      image: "https://picsum.photos/300/200?2"
    }
  ]);

  console.log("Data Inserted");

  process.exit();
});