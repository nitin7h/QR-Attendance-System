import { NextResponse } from "next/server";
import { databaseConnection } from "@/dataBase/connection/connection";
import Admin from "@/dataBase/models/adminSignup";
import bcrypt from "bcryptjs/dist/bcrypt";
export async function POST(req) {
    const data = await req.json();
    const { fullName, adminId, email, password } = data
    console.log("Admin SignUp Data : ", data);
    databaseConnection()
    const adminExist = await Admin.findOne({ email })
    console.log(" adminExist : ", adminExist);
    if (adminExist) {


        return NextResponse.json({ message: "Email Allready Exist", data: false })
    }

    const adminIdExist = await Admin.findOne({ adminId })
    console.log(" adminIdExist : ", adminIdExist);
    if (adminIdExist) {

        return NextResponse.json({ message: "Admin Id Allready Exist", data: false })
    }
    const hashPassword = await bcrypt.hash(password, 10)
    const signupData = new Admin({
        fullName,
        adminId,
        email,
        password: hashPassword
    })

    await signupData.save()

    return NextResponse.json({ message: "Your Data Posted Succesfully", data });
}