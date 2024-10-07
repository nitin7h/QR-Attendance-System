import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    studentData: [],
}

export const studentSlice = createSlice({
    name: 'studentData',
    initialState,
    reducers: {

        storeStudentData: (state, action) => {
            state.studentData = [...state.studentData, action.payload]
        },
    },
})

// Action creators are generated for each case reducer function
export const { storeStudentData } = studentSlice.actions

export default studentSlice.reducer