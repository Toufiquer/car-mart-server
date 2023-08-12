const express = require("express");
const router = express.Router();
const carRouter = require("./car.controller");
router
  .route("/")
  .get(carRouter.getCar)
  .post(carRouter.saveCar)
  .put(carRouter.updateCar)
  .delete(carRouter.deleteCar);

//  * if has an id
router
  .route("/:id")
  .get(carRouter.getCar)
  .post(carRouter.saveCar)
  .put(carRouter.updateCar)
  .delete(carRouter.deleteCar);
module.exports = router;
