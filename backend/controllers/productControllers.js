import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    if (!name || !description || !price || !category || !subCategory || !sizes) {
      return res.json({ success: false, message: "All fields are required." });
    }

    const Image1 = req.files.Image1 && req.files.Image1[0];
    const Image2 = req.files.Image2 && req.files.Image2[0];
    const Image3 = req.files.Image3 && req.files.Image3[0];
    const Image4 = req.files.Image4 && req.files.Image4[0];

    const images = [Image1, Image2, Image3, Image4].filter((item) => item !== undefined);

    if (images.length === 0) {
      return res.json({ success: false, message: "At least one image is required." });
    }

    // Upload images to Cloudinary
    const imageUrl = await Promise.all(
      images.map(async (item) => {
        try {
          const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
          return result.secure_url;
        } catch (error) {
          console.error(`Error uploading image: ${error.message}`);
          return null; // Handle the error without breaking the whole process
        }
      })
    );

    // Filter out any null values in case of failed uploads
    const validImageUrls = imageUrl.filter(url => url !== null);

    if (validImageUrls.length === 0) {
      return res.json({ success: false, message: "Failed to upload images." });
    }

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes), // Assuming the client sends a JSON string
      image: validImageUrls,
      bestseller: bestseller || false,
      date: Date.now(),
    };

    // Create new product
    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.json({ success: false, message: "An error occurred while adding the product." });
  }
};

// List products
const listProduct = async (req, res) => {
  try {
    const products = await productModel.find(); // Fetch all products from the database
    if (!products || products.length === 0) {
      return res.json({ success: false, message: "No products found" });
    }

    res.json({ success: true, products }); // Send the list of products
  } catch (error) {
    console.error("Error fetching products:", error);
    res.json({ success: false, message: "An error occurred while fetching products." });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    if (!productId) {
      return res.json({ success: false, message: "Product ID is required" });
    }

    // Find the product by ID and delete it
    const product = await productModel.findByIdAndDelete(productId);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, message: "Product removed successfully" });
  } catch (error) {
    console.error("Error removing product:", error);
    res.json({ success: false, message: "An error occurred while removing the product." });
  }
};

// Single product
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.params; // Assuming the product ID is passed as a URL parameter

    if (!productId) {
      return res.json({ success: false, message: "Product ID is required" });
    }

    // Find the product by ID
    const product = await productModel.findById(productId);

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, product });
  } catch (error) {
    console.error("Error fetching single product:", error);
    res.json({ success: false, message: "An error occurred while fetching the product." });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };
