const mongoose=require("mongoose")

const SubcategorySchema = new mongoose.Schema({
    category: {
      type: String,
      required: true,
      
    },
    subcategories: [{
      name: {
        type: String,
        required: true,
      },
  
    }],
  });
  
  const subCategoryModel = mongoose.model('Subcategory', SubcategorySchema);

  module.exports=subCategoryModel
  