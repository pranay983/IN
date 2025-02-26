import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://pranay550r:9951636423@greatstack.cdmo3.mongodb.net//food-del').then(()=>console.log("DB Connected"));
} 