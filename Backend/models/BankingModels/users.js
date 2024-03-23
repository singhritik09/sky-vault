import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: {
        type: String,
    },
    pancardNum: {
        type: String,
    },
    mobileNum: {
        type: Number,
    },
})

const BankingUsers = mongoose.model("bankingusers", userSchema)

export default BankingUsers;