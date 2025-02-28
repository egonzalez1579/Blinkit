import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: Array,
      default: [],
    },
    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'category',
      },
    ],
    subCategory: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'subCategory',
      },
    ],
    unit: {
      type: String,
      default: '',
    },
    stock: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      defualt: null,
    },
    discount: {
      type: Number,
      default: null,
    },
    description: {
      type: String,
      default: '',
    },
    more_details: {
      type: Object,
      default: {},
    },
    publish: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

//create a text index
productSchema.index(
  {
    name: 'text',
    description: 'text',
  },
  {
    name: 10,
    description: 5,
  }
);

const ProductModel = mongoose.model('product', productSchema);

// The product.model.js file contains the ProductModel schema, which defines the structure of the product document in the
// MongoDB database. The schema includes fields such as name, image, category, subCategory, unit, stock, price, discount,
// description, more_details, and publish. The ProductModel schema is exported as the default export from the file.
export default ProductModel;
