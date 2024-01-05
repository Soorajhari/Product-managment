const productModel = require("../model/product");

const addProduct = async (req, res) => {
  try {
    const { title, ram, price, total, subcategory, category, description } =
      req.body;
    console.log(title,ram,price);
    const images = req.files;
    console.log(images);

    for (const image of images) {
      var imagePath = image.filename;
    }

    const Product = new productModel({
      title,
      ram,
      price,
      total,
      subcategory,
      category,
      description,
      imagePath,
    });
    await Product.save();

    res.status(200).json({ message: "product added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addProduct };
