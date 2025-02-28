import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
    },
    orderId: {
      type: String,
      required: [true, 'Provide orderId'],
      unique: true,
    },
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: 'product',
    },
    product_details: {
      name: String,
      image: Array,
    },
    paymentId: {
      type: String,
      default: '',
    },
    payment_status: {
      type: String,
      default: '',
    },
    delivery_address: {
      type: mongoose.Schema.ObjectId,
      ref: 'address',
    },
    subTotalAmt: {
      type: Number,
      default: 0,
    },
    totalAmt: {
      type: Number,
      default: 0,
    },
    invoice_receipt: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const OrderModel = mongoose.model('order', orderSchema);
// The order.model.js file contains the OrderModel schema, which defines the structure of the order document in the MongoDB database.
// The schema includes fields such as userId, orderId, productId, product_details, paymentId, payment_status, delivery_address, subTotalAmt,
// totalAmt, and invoice_receipt. The OrderModel schema is exported as the default export from the file.
export default OrderModel;
