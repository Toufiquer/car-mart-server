const {
  productServiceSave,
  productServiceGet,
  productServiceDelete,
  productServiceUpdate,
} = require("./product.service");

module.exports.saveProduct = async (req, res, next) => {
  try {
    const result = await productServiceSave(req.body);
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
module.exports.getProduct = async (req, res, next) => {
  try {
    const result = await productServiceGet(req.body);
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
module.exports.updateProduct = async (req, res, next) => {
  try {
    const result = await productServiceUpdate(req.body);
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
module.exports.deleteProduct = async (req, res, next) => {
  try {
    const result = await productServiceDelete(req.body);
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
