import { configureStore } from '@reduxjs/toolkit'
import studentSlice from '../slices/studentSlice'
import adminSlice from '../slices/adminSlice'
export const makeStore = () => {
    return configureStore({
        reducer: {
            student: studentSlice,
            admin: adminSlice
        },
    })
}