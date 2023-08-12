module.exports.carPreMiddleWare = function (next) {
  if (this.quantity === 0) {
    this.status = "out-of-stock";
  }
  next();
};
module.exports.carPostMiddleWare = function (doc, next) {
  next();
};
