import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: String,
    studentId: String,
    email: String,
    password: String
})


const User = mongoose.models.studentData || mongoose.model("studentData", userSchema)

export default User