const {
  carServiceSave,
  carServiceGet,
  carServiceGetId,
  carServiceDelete,
  carServiceUpdate,
} = require("./car.service");

module.exports.saveCar = async (req, res, next) => {
  try {
    const result = await carServiceSave(req.body);
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
module.exports.getCarId = async (req, res, next) => {
  try {
    const result = await carServiceGetId(req?.params?.id);
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
module.exports.getCar = async (req, res, next) => {
  try {
    const result = await carServiceGet(req.body);
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
module.exports.updateCar = async (req, res, next) => {
  try {
    const result = await carServiceUpdate({
      id: req.params.id,
      data: req.body,
    });
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
module.exports.deleteCar = async (req, res, next) => {
  try {
    const result = await carServiceDelete(req.params?.id);
    res.status(200).send({
      status: "success",
      message: "Data is saved",
      data: result,
    });
  } catch (err) {
    res.status(400).send({
      status: "failed to Save",
      message: err.message,
    });
  }
};
