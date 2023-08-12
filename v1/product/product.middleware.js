module.exports.productPreMiddleWare = function (next) {
  if (this.quantity === 0) {
    this.status = "out-of-stock";
  }
  next();
};
module.exports.productPostMiddleWare = function (doc, next) {
  next();
};
