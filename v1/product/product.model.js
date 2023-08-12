const mongoose = require("mongoose");
const { productSchema } = require("./product.schema");
module.exports.productModel = mongoose.model("Product", productSchema);
