import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    category: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'category',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const SubCategoryModel = mongoose.model('subCategory', subCategorySchema);

// The product.model.js file contains the ProductModel schema, which defines the structure of the product document in the
// MongoDB database. The schema includes fields such as name, image, category, subCategory, unit, stock, price, discount,
// description, more_details, and publish. The ProductModel schema is exported as the default export from the file.
// export default ProductModel;
// The subCategory.model.js file contains the SubCategoryModel schema, which defines the structure of the subCategory document
// in the MongoDB database. The schema includes fields such as name, image, and category. The SubCategoryModel schema is exported
// as the default export from the file.
export default SubCategoryModel;
