import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://utsav3711:300304@cluster0.csquy.mongodb.net/farm-connect', {
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
    }
};
