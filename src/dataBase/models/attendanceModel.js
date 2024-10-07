import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({

    studentId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    datedAt: {
        type: Date,
        default: Date.now
    }

})

const Attendance = mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema)
export default Attendance