const mongoose = require("mongoose");
const { carSchema } = require("./car.schema");
module.exports.carModel = mongoose.model("Car", carSchema);
