const { carModel } = require("./car.model");

module.exports.carServiceSave = async (data) => {
  // @ save
  // const car = new carModel(data);
  // $ do any thing before save
  // const result = await car.save();
  // @ create

  console.log(data, " => Line No: 10");
  const result = await carModel.create({ ...data });
  // result.logger();
  return result;
};
module.exports.carServiceGet = async (id) => {
  // @ find all
  const result = await carModel.find({});
  // @ find a doc
  // const result = await carModel.find({id: "1234..."});
  // const result = await carModel.findById("1234");
  // @ find all doc $or
  // const result = await carModel.find({$or: [{id: "123"},{name: "name"}]});
  // const result = await carModel.find({},{name,quantity});
  // @ find all doc $ne
  // const result = await carModel.find({},{-name,-quantity});
  //  * all can add .find.skip().limit()
  //  * all can add .find.sort({quantity: -1})

  // @ find all doc chaining
  //   const result = await carModel
  //     .where("name")
  //     .equals(/\w/)
  //     .where("quantity")
  //     .length(2)
  //     .lt(1000)
  //     .limit(2)
  //     .sort({ quantity: -1 });

  return result;
};
module.exports.carServiceUpdate = async (id) => {
  // @ update a car
  const query = { id: id };
  const update = { $set: { name: "jason bourne" } };
  const options = "";
  const result = await carModel.updateOne(query, update, options);
  return result;
};
module.exports.carServiceDelete = async (id) => {
  // @ delete a car
  const result = await carModel.deleteOne({ id: "1234" });
  return result;
};
