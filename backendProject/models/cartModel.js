const mongoose = require("mongoose");
const CartSchema = new mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  productId: {
    type: String,
    require: true,
  },

  quantity: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

const Cart = mongoose.model("cart", CartSchema);
module.exports = Cart;
