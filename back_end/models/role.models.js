import mongoose from "mongoose";
const { Schema } = mongoose;

const roleSchema = new Schema({
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

export const roleModel = mongoose.model('roles', roleSchema);