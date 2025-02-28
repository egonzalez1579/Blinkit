import mongoose from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    address_line: {
      type: String,
      default: '',
    },
    city: {
      type: String,
      default: '',
    },
    state: {
      type: String,
      default: '',
    },
    pincode: {
      type: String,
    },
    country: {
      type: String,
    },
    mobile: {
      type: Number,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const AddressModel = mongoose.model('address', addressSchema);

// The address.model.js file contains the AddressModel schema, which defines the structure of the address document
// in the MongoDB database. The schema includes fields such as address_line, city, state, pincode, country,
// mobile, status, and userId. The AddressModel schema is exported as the default export from the file.
export default AddressModel;
