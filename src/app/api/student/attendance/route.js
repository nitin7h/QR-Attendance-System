const { NextResponse } = require("next/server");
import Attendance from "@/dataBase/models/attendanceModel";
import { databaseConnection } from "@/dataBase/connection/connection";
import User from "@/dataBase/models/signupModel";
import { decryption } from "@/crypto/crypto";
export async function POST(req) {

    await databaseConnection()
    const data = await req.json()
        // console.log("Attendance Data : ", data);
    const { studentId, email, fullName } = data

    const response = await User.findOne({ email })
        // console.log("Check data in db from qr : ", response);

    if (!response) {
        return NextResponse.json({ message: "Invalid QR Code", data: false })
    }




    if (response.studentId !== studentId) {
        return NextResponse.json({ message: "Invalid QR Code", data: false })
    }


    const status = new Attendance({
        studentId: studentId,
        email: email
    })

    await status.save()



    return NextResponse.json({ message: "Present" })

}