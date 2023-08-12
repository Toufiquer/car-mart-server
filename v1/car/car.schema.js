const mongoose = require("mongoose");
const {
  carPreMiddleWare,
  carPostMiddleWare,
} = require("./car.middleware");
const carSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please provide a name for this car"],
      trim: true,
      unique: true,
      minLength: [3, "Name required at list 3 letter"],
    },
    description: { type: String, require: true },
    price: {
      type: Number,
      required: true,
      min: [0, "price can't be negative"],
    },
    unit: {
      type: String,
      required: true,
      enum: {
        values: ["kg", "litre", "pcs"],
        message: "unit value must be kg/litre/pcs",
      },
    },
    quantity: {
      type: Number,
      required: true,
      min: [0, "quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
        message: "Quantity must be an integer",
      },
    },
    status: {
      type: String,
      required: false,
      enum: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "status can't be {VALUE}",
      },
    },
    //   createdAt: {
    //     type: Date,
    //     default: Date.now,
    //   }
    //   updateAt: {
    //     type: Date,
    //     default: Date.now,
    //   }
    supplier: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
    },
    categories: [
      {
        name: { type: String, required: true },
        _id: mongoose.Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
  }
);

// * middle ware
carSchema.pre("save", carPreMiddleWare);
carSchema.post("save", carPostMiddleWare);

// * static method
carSchema.methods.logger = function () {
};
// call this method from controller

module.exports.carSchema = carSchema;
