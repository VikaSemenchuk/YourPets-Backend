const mongoose = require("mongoose");

mongoose.set('strictQuery', false);

const app = require("./app");
require("dotenv").config("./.env");

mongoose
  .connect(process.env.MONGO_PASS)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch(() => {
    console.log("NO Database connection");
    process.exit(1);
  });

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});
