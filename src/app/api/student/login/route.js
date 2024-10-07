const { NextResponse } = require("next/server");
import { databaseConnection } from "@/dataBase/connection/connection";
import User from "@/dataBase/models/signupModel";
import bcrypt from "bcryptjs/dist/bcrypt";
import { decryption, encryption } from "@/crypto/crypto";
export async function POST(req) {
    try {
        let data = await req.json();
        console.log("Data : ", data);
        const { email, password } = data

        databaseConnection()

        // const response = await User.findOne({ email, password })
        const response = await User.findOne({ email })


        if (!response) {
            console.log("Inavlid Email");

            return NextResponse.json({ message: "Inavlid Email", response: false });
        }
        // console.log("Response : ", response);

        const isMatch = await bcrypt.compare(password, response.password);
        if (!isMatch) {
            console.log("Inavlid PD");

            return NextResponse.json({ message: "Invalid Password", response: false });
        }
        console.log("login Succesfully");

        return NextResponse.json({ message: "login Succesfully", response });



    } catch (error) {
        console.error("Error parsing JSON:", error);
        return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 });
    }
}