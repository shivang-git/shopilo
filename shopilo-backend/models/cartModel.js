import mongoose, { mongo } from "mongoose";
// Declare the Schema of the Mongo model
// Declare the Schema of the Mongo model
var cartSchema = new mongoose.Schema(
    {
      products: [
        {
          product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          count: Number,
          price: Number,
        },
      ],
      cartTotal: Number,

      orderby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );
//Export the model
const Cart= mongoose.model('Cart', cartSchema);

export default Cart