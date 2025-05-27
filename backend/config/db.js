import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://bhavanakatta:abcd1234@cluster0.iiwncph.mongodb.net/potato').then(()=> console.log("Data base connected"));
}
