const bcrypt = require("bcrypt");
const userModel = require("../model/user");
const categoryModel = require("../model/category");
const subCategoryModel = require("../model/subCategory");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const productModel = require("../model/product");
dotenv.config();
const Asecret = process.env.SECRET_TOKEN || "";
const Rsecret = process.env.SECRET_RTOKEN || "";
console.log(Asecret);
console.log(Rsecret);

const creatUser = async (req, res) => {
  const { userName, email, password } = req.body; //getting the user data
  console.log(req.body);
  const salt = 10;
  console.log(salt);

  const hashPassword = bcrypt.hashSync(password, salt);
  console.log(hashPassword);

  try {
    const user_email = await userModel.findOne({ email: email }); //check for an exisiting user

    if (user_email) {
      return res.json({
        status: "error",
        message: "This email is already registered.",
      });
    }

    const user = new userModel({
      userName,
      email,
      password: hashPassword,
    });

    await user.save(); // save it in the database

    res.json({
      status: "ok",
      _id: user._id,
      message: "User Signup Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: " Network error! Try again" });
  }
};

const userLogin = async (req, res) => {
  // checking user credentials
  const { email, password } = req.body;

  console.log(email, password);
  const user = await userModel.findOne({ email: email });
  console.log(user);

  if (!user) {
    res.json({ status: 404, message: "user not found" });
    return;
  } else {
    try {
      const passowrdMatch = await bcrypt.compare(password, user.password); // compare passwords

      if (!passowrdMatch) {
        res.json({ status: 404, message: "wrong password or inavlid email" });
        return;
      }

      const access_token = jwt.sign(
        // cretaing access token
        { _id: user._id, emai: user.email },
        Asecret,
        {
          expiresIn: "50s",
        }
      );

      console.log(access_token);
      const refresh_token = jwt.sign(
        //cretae refresh token
        { _id: user._id, email: user.email },
        Rsecret,
        { expiresIn: "7d" }
      );

      console.log(refresh_token);

      res.status(200).json({
        status: "ok",
        _id: user._id,
        accesstoken: access_token,
        refreshtoken: refresh_token,
        firstName: user.userName,
        email: user.email,
        message: "login successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: "error",
        message: "An error occured plaese try again",
      });
    }
  }
};

const generateAcessToken = (req, res) => {
  //here create new accesstoken when previous is expired
  try {
    const refreshtoken = req.body.refreshtoken; //getting refreh token
    console.log(refreshtoken + "hi sooraj");
    if (!refreshtoken) {
      return res.status(400).json({ msg: "Please login again." });
    }

    jwt.verify(refreshtoken, Rsecret, async (err, result) => {
      if (err) {
        res.status(400).json({ msg: "Please login again." });
      }
      const user = await userModel.findById(result._id);

      if (!user) {
        res.status(400).json({ msg: "User does not exist." });
      }
      const access_token = jwt.sign(
        { _id: user?._id, emai: user?.email },
        Asecret,
        {
          expiresIn: "50s",
        }
      );
      res.json({
        status: "refreshtoken send successfully",
        access_token,
        user,
      });
    });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ status: "error", message: "An error occured please try again" });
  }
};

const Search = async (req, res) => {
  try {
    const search = req.body.search;
    console.log(search);
    const searchPattern = new RegExp(search, "i");
    const searchedProducts = await productModel
      .find({ title: searchPattern })
      .exec();
    console.log(searchedProducts);
    res.json({ status: "ok", Product: searchedProducts });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", message: "error occured" });
  }
};

const addCategory = async (req, res) => {
  try {
    const category = req.body.category;
    console.log(category);
    const categoryData = new categoryModel({
      category,
    });
    await categoryData.save();
    res.json({
      status: "ok",
      _id: categoryData._id,
      message: "Category added Successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", error: "An error occured" });
  }
};

const addSubCategory = async (req, res) => {
  try {
    const { value: subcategory, selectedValue: category } = req.body;
    console.log(subcategory, category);
    let existingCategory = await subCategoryModel.findOne({ category });

    if (!existingCategory) {
      existingCategory = new subCategoryModel({
        category,
        subcategories: [{ name: subcategory }],
      });
    } else {
      existingCategory.subcategories.push({ name: subcategory });
    }
    await existingCategory.save();

    res.status(200).json({ message: "Subcategory added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategory = async (req, res) => {
  try {
    const categoryData = await categoryModel.find();
    console.log(categoryData);
    res.json({ status: "ok", data: categoryData });
  } catch (error) {
    console.log(error.message);
  }
};

const getSubCategory = async (req, res) => {
  try {
    const subcategoryData = await subCategoryModel.find();
    console.log(subcategoryData);
    res.json({ status: "ok", data: subcategoryData });
  } catch (error) {
    console.log(error.message);
  }
};

const getProduct = async (req, res) => {
  try {
    const productData = await productModel.find();
    console.log(productData);
    res.json({ status: "ok", data: productData });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  creatUser,
  addCategory,
  getCategory,
  addSubCategory,
  userLogin,
  generateAcessToken,
  getSubCategory,
  getProduct,
  Search,
};
