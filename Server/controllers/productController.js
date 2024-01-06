const productModel = require("../model/product");
const whishlistModel = require("../model/whishlist");

const addProduct = async (req, res) => {
  try {
    const { title, ram, price, total, subcategory, category, description } =
      req.body;
    console.log(title, ram, price);
    const images = req.files;
    console.log(images);
    const imagePaths = [];

    for (const image of images) {
        imagePaths.push(image.filename); 
      }
      

    const Product = new productModel({
      title,
      ram,
      price,
      total,
      subcategory,
      category,
      description,
      imagePath:imagePaths,
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
    const { id, title, ram, price, total, subcategory, category, description } =
      req.body;
    console.log(req.body);
    const updateProduct = await productModel.findByIdAndUpdate(
      id,
      {
        $set: {
          title,
          ram,
          price,
          total,
          subcategory,
          category,
          description,
        },
      },
      { new: true }
    );
    res.json({ status: "ok", updatedproduct: updateProduct });
  } catch (error) {
    console.error(error);
    res.json({
      status: "error",
      message: "An error occured please try again!",
    });
  }
};

const whsihList = async (req, res) => {
  try {
    const id = req.body.id;
    console.log(id);
    if (!id) {
      res.json({ status: "error", message: "id not found" });
    }
    const whishlistData = await productModel.findOne({ _id: id });
    const title = whishlistData.title;
    const ram = whishlistData.ram;
    const price = whishlistData.price;
    const imagePath = whishlistData.imagePath[0];

    console.log(whishlistData);

    const whishlistTitle = await whishlistModel.findOne({ title: title });

    if (whishlistTitle) {
      return res.json({
        status: "error",
        message: "Product already in your whislist",
      });
    }

    const whishlist = new whishlistModel({
      title,
      ram,
      price,
      imagePath,
    });
    await whishlist.save();

    console.log(whishlist);
    res.json({ status: "ok", whishlist: whishlist });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const filterProducts = async (req, res) => {
  try {
    const filters = req.body.categories.map(
      (category) => new RegExp(category, "i")
    );
    const searchedProducts = await productModel
      .find({ subcategory: { $in: filters } })
      .exec();
    res.json({ status: "ok", filterData: searchedProducts });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", message: "error occurred" });
  }
};

const getWhishlist = async (req, res) => {
  try {
    const whishlistData = await whishlistModel.find();
    console.log(whishlistData  + "sooraj");
    res.json({ status: "ok", data: whishlistData });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  addProduct,
  singleProduct,
  updateProduct,
  whsihList,
  filterProducts,
  getWhishlist,
};
