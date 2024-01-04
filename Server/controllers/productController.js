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