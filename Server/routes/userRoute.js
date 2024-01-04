const express =require('express')
const Router=express.Router()
// const upload=require("../middleware/multer")
// const pdfController=require("../controllers/file")
const authController=require("../controllers/user")
// const authenticated=require("../middleware/authenticationChecker")

Router.post("/signup",authController.creatUser)
Router.post("/category",authController.addCategory)
Router.post("/sub-category",authController.addSubCategory)
Router.get("/get-category",authController.getCategory)
Router.post("/product",authController.getCategory)

module.exports=Router