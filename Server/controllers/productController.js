const productModel = require("../model/product");

const addProduct = async (req, res) => {
  try {
    const { title, ram, price, total, subcategory, category, description } =
      req.body;
    console.log(title, ram, price);
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

const singleProduct = async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    if (!id) {
      res.json({ status: "error", message: "id not found" });
    }

    const productData = await productModel.findOne({ _id: id });
    console.log(productData);

    res.json({ status: "ok", Product: productData });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};


const updateProduct = async (req, res) => {
    try {
        const {id, title, ram, price, total, subcategory, category, description } =
        req.body;
       console.log(req.body)
      const updateProduct = await productModel.findByIdAndUpdate(
        id,
        { $set: { 
            title,
            ram,
            price,total,subcategory,category,description
        } },
        { new: true }
      );
      res.json({status:"ok",updatedproduct:updateProduct});
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  };

module.exports = { addProduct, singleProduct ,updateProduct};
