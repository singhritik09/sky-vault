import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
    transactionId:{
        type:String,
        required:true
    },
    userId: {
        type: String,
        required: true
    },
    receiverId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    credit: {
        type: Boolean,
    },
    debit: {
        type: Boolean,
    },
    time: {
        type: String,
    }
});

const userSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
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
    balance:{
        type:Number,
    },
    transactionHistory:[transactionSchema]
    
})

const BankingUsers = mongoose.model("bankingusers", userSchema)

export default BankingUsers;