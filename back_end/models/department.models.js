import mongoose from "mongoose";
const { Schema } = mongoose;

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    }
}, {
    timestamps: true
})

export const departmentModel = mongoose.model('departments', departmentSchema);