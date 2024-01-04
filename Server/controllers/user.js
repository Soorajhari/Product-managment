const bcrypt = require("bcrypt");
const userModel = require("../model/user");
const categoryModel=require("../model/category")
const  subCategoryModel=require("../model/subCategory")
// const otpModel=require("../model/otp")
const jwt =require('jsonwebtoken')
// const nodemailer=require('nodemailer')
const dotenv=require('dotenv')
dotenv.config()
const Asecret = process.env.SECRET_TOKEN || "";
const Rsecret = process.env.SECRET_RTOKEN || "";
console.log(Asecret);
console.log(Rsecret);



const creatUser = async (req, res) => {
    const { userName, email, password } = req.body//getting the user data
    console.log(req.body);
    const salt = 10;
    console.log(salt);
  
    const hashPassword = bcrypt.hashSync(password, salt);
    console.log(hashPassword);
  
    try {
      const user_email = await userModel.findOne({ email: email });//check for an exixiting user
  
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
  
      await user.save();// save it in the database
  
      res.json({
        status: "ok",
        _id: user._id,
        message: "User Signup Successfully!",
      });
  
    } catch (error) {
      console.log(error);
      res.json({ status: "error", error: "Duplicae email or Network error" });
    }
  };


const addCategory= async (req,res)=>{
    try{
        const category=req.body.category;
        console.log(category)
        const categoryData= new categoryModel({
            category
        })
        await categoryData.save()
        res.json({
            status: "ok",
            _id: categoryData._id,
            message: "Category added Successfully",
          });


    }catch(error){
        console.log(error.message)
        res.json({ status: "error", error: "An error occured" });
    }

}


const addSubCategory= async (req,res)=>{
    try {
        const { value: subcategory, selectedValue: category } = req.body;
        console.log(subcategory,category);
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
    
        res.status(200).json({ message: 'Subcategory added successfully' });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }

}


const getCategory=async (req,res)=>{
    try{
 const categoryData= await categoryModel.find()
 console.log(categoryData)
 res.json({status:"ok",data:categoryData})
    }catch(error){
        
    }

}




  module.exports={creatUser,addCategory,getCategory,addSubCategory}