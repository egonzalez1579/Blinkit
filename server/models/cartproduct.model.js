import mongoose from 'mongoose';

const cartProductSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: 'product',
    },
    quantity: {
      type: Number,
      default: 1,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const CartProductModel = mongoose.model('cartProduct', cartProductSchema);

// The cartproduct.model.js file contains the CartProductModel schema, which defines the structure of the cart product document in the MongoDB database.
// The schema includes fields such as productId, quantity, and userId. The CartProductModel schema is exported as the default export from the file.
// export default CartProductModel;
export default CartProductModel;
