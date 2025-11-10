import mongoose, { mongo } from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    last_name1: {
        type: String,
        required: true
    },
    last_name2: {
        type: String,
        required: true
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'roles',
        required: true
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'departments',
        required: true
    },
    userStatus:{
        type:Boolean,
        required: true
    }
}, {
    timestamps: true
})

export const userModel = mongoose.model('users', userSchema);