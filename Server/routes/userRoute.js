const express =require('express')
const Router=express.Router()
const multer=require("../middleware/multer")
// const upload=require("../middleware/multer")
// const pdfController=require("../controllers/file")
const authController=require("../controllers/user")
const productController=require("../controllers/productController")

// const authenticated=require("../middleware/authenticationChecker")

Router.post("/signup",authController.creatUser)
Router.post("/login",authController.userLogin)
Router.post("/category",authController.addCategory)
Router.post("/sub-category",authController.addSubCategory)
Router.get("/get-category",authController.getCategory)
Router.get("/get-subcategory",authController.getSubCategory)
Router.get("/get-product",authController.getProduct)
Router.post("/product",multer.array("file",3),productController.addProduct)
Router.post("/search",authController.Search)

module.exports=Router