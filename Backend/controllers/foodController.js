import foodModel from "../config/foodModel.js";
import fs from 'fs';

// Add food item 
const addFood = async (req, res) => {
    const image_filename = req.file ? req.file.filename : null;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.json({ success: true, message: "Product Added" });
    } catch (error) {
        console.error("Error adding Product:", error);
        res.status(500).json({ success: false, message: "Error adding Product" });
    }
};

//all food list
const listFood = async(req , res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true , data : foods})
    } catch (error) {
        console.log({success:false , message:"error"})
    }
}

//remove food items
const removeFood = async(req , res) =>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true , message:"Product Removed"})
    } catch (error) {
        console.log("error");
        res.json({success:false , message:"error"})
    }
}
export { addFood , listFood , removeFood};
