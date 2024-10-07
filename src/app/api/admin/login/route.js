import { NextResponse } from "next/server";
import { databaseConnection } from "@/dataBase/connection/connection";
import Admin from "@/dataBase/models/adminSignup";
import bcrypt from "bcryptjs/dist/bcrypt";

export async function POST(req) {
    const data = await req.json();
    const { email, password } = data
    // console.log("Admin SignUp Data : ", data);

    databaseConnection()
    const response = await Admin.findOne({ email })
    if (!response) {
        console.log("Inavlid Email");

        return NextResponse.json({ message: "Invalid Email", response: false });
    }
    console.log("admin Login Response : ", response);
    const isMatch = await bcrypt.compare(password, response.password);

    if (!isMatch) {
        console.log("Inavlid PD");

        return NextResponse.json({ message: "Invalid Password", response: false });
    }
    console.log("login Succesfully");

    return NextResponse.json({ message: "Login Succesfully", response });
}