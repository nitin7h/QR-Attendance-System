import mongoose from "mongoose";

const url = process.env.MONGO_URI
export const databaseConnection = async() => {
    try {
        await mongoose.connect(url).then((res) => {
            console.log("connected to database 👌💕");
        }).catch((err) => {
            console.log("connection failed to database", err);
        })
    } catch (error) {
        console.log(error);

    }
}