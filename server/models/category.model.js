import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = mongoose.model('category', categorySchema);

// The category.model.js file contains the CategoryModel schema, which defines the structure of the category document
// in the MongoDB database. The schema includes fields such as name and image. The CategoryModel schema is exported as the
// default export from the file.
export default CategoryModel;
