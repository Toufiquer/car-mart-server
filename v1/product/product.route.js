const express = require("express");
const router = express.Router();
const productRouter = require("./product.controller");
router
  .route("/")
  .get(productRouter.getProduct)
  .post(productRouter.saveProduct)
  .put(productRouter.updateProduct)
  .delete(productRouter.deleteProduct);

//  * if has an id
router
  .route("/:id")
  .get(productRouter.getProduct)
  .post(productRouter.saveProduct)
  .put(productRouter.updateProduct)
  .delete(productRouter.deleteProduct);
module.exports = router;
