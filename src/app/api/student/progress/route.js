import { NextResponse } from "next/server";

import Attendance from "@/dataBase/models/attendanceModel";
export async function POST(req) {
    const data = await req.json();

    const { studentId } = data
    const response = await Attendance.find({ studentId })

    const dateArray = []
    const timeArray = []

    response.map((item, index) => {
        dateArray.push((item.datedAt).toLocaleDateString())
        timeArray.push((item.datedAt).toLocaleTimeString())
    })



    const timeData = {
        dateArray,
        timeArray
    }



    return NextResponse.json({ message: "Progress Report", timeData });
}