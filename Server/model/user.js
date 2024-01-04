const mongoose=require("mongoose")


const userSchema=new mongoose.Schema ({
    userName:{
        type:String,
        required:true
    },
    email: {
        type: String,
        trim: true,
        // unique: true ,
        required: true
      },
    password:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"unverified"
    }
 


})


 const userModel=mongoose.model('User',userSchema)

module.exports= userModel
