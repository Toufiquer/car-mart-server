const express = require("express");
const app = express();
const cors = require("cors");
const productRouter = require("./v1/product/product.route");
const carRouter = require("./v1/car/car.route");

// middle ware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// product route
app.use("/api/v1/product", productRouter);
// car route
app.use("/api/v1/car", carRouter);

app.all("*", (req, res, next) => {
  res.send({ message: "URL Not Found" });
});
module.exports = app;
