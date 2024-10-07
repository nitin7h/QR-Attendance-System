import { NextResponse } from "next/server";
import User from "@/dataBase/models/signupModel";
import Attendance from "@/dataBase/models/attendanceModel";
import { databaseConnection } from "@/dataBase/connection/connection";
import { decryption } from "@/crypto/crypto";
export async function GET(req) {
    databaseConnection()
    const attendance = await Attendance.find()
    const studentData = await User.find()
        // console.log("attendance : ", attendance);
        // console.log("studentData : ", studentData);





    const mergeData = {
        studentData: studentData,
        attendance: attendance,

    }

    // console.log("mergeData : ", mergeData);

    return NextResponse.json({ message: "Data fetching", mergeData })

}