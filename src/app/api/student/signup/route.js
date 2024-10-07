const { NextResponse } = require("next/server");
import { encryption } from "@/crypto/crypto";
import bcrypt from "bcryptjs/dist/bcrypt";
import { databaseConnection } from "@/dataBase/connection/connection";
import User from "@/dataBase/models/signupModel";
export async function POST(req) {
    try {
        let data = await req.json();
        console.log("Data : ", data);
        const { fullName, studentId, email, password } = data
        await databaseConnection()
        const userExit = await User.findOne({ email })
        console.log("userExit : ", userExit);

        if (userExit) {
            return NextResponse.json({ message: "Email already exist", data: false })
        }
        const userStudentIdExit = await User.findOne({ studentId })
        if (userStudentIdExit) {
            return NextResponse.json({ message: "Student ID already exist", data: false })
        }
        const hashPassword = await bcrypt.hash(password, 10)

        const signupData = new User({
            fullName,
            studentId,
            email: email,
            password: hashPassword
        })





        await signupData.save()

        return NextResponse.json({ message: "Your Data Posted Succesfully", data });
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 });
    }
}