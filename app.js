const express = require("express");
const app = express();
const cors = require("cors");
const productRouter = require("./v1/product/product.route");
const carRouter = require("./v1/car/car.route");
const {
  globalErrorHandler,
} = require("./middleware/globalErrorHandler/globalErrorHandler");

// middle ware
app.use(express.json());
app.use(cors());



// Apply the rate limiting middleware to API calls only
// Limit each IP to 100 requests per `window` (here, per 15 minutes)
app.use(apiLimiter);

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// product route
app.use("/api/v1/product", productRouter);
// car route
app.use("/api/v1/car", carRouter);

// Global Error Handler
app.use(globalErrorHandler);

app.all("*", (req, res, next) => {
  res.send({ message: "URL Not Found" });
});

module.exports = app;
