import mongoose, { Schema, model } from "mongoose";

const ProductsSchema = new Schema({
  product_name: { type: String, required: true, index: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  in_stock: { type: Boolean, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  weight: { type: Number, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
});

ProductsSchema.index({ product_name: "text" });

const ProductsModel =
  mongoose.models.Products || model("Products", ProductsSchema, "products");

export { ProductsModel, ProductsSchema };
