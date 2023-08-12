const { productModel } = require("./product.model");

module.exports.productServiceSave = async (data) => {
  // @ save
  // const product = new productModel(data);
  // $ do any thing before save
  // const result = await product.save();
  // @ create
  const result = await productModel.create({ ...data });
  result.logger();
  return result;
};
module.exports.productServiceGet = async (id) => {
  // @ find all
  const result = await productModel.find({});
  // @ find a doc
  // const result = await productModel.find({id: "1234..."});
  // const result = await productModel.findById("1234");
  // @ find all doc $or
  // const result = await productModel.find({$or: [{id: "123"},{name: "name"}]});
  // const result = await productModel.find({},{name,quantity});
  // @ find all doc $ne
  // const result = await productModel.find({},{-name,-quantity});
  //  * all can add .find.skip().limit()
  //  * all can add .find.sort({quantity: -1})

  // @ find all doc chaining
  //   const result = await productModel
  //     .where("name")
  //     .equals(/\w/)
  //     .where("quantity")
  //     .length(2)
  //     .lt(1000)
  //     .limit(2)
  //     .sort({ quantity: -1 });

  return result;
};
module.exports.productServiceUpdate = async (id) => {
  // @ update a product
  const query = { id: id };
  const update = { $set: { name: "jason bourne" } };
  const options = "";
  const result = await productModel.updateOne(query, update, options);
  return result;
};
module.exports.productServiceDelete = async (id) => {
  // @ delete a product
  const result = await productModel.deleteOne({ id: "1234" });
  return result;
};
