import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Blog:852e10@cluster0.scmx6.mongodb.net/blog-app');
    console.log("DB Connected")
}