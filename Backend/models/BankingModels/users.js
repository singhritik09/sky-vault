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
        type: Date,
    }
});
const bondOrderSchema = new mongoose.Schema({
    bondId:{
        type:Number,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    bondName:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    interest:{
        type:Number,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
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
    transactionHistory:[transactionSchema],
    bondPurchase:[bondOrderSchema],
});

const BankingUsers = mongoose.model("bankingusers", userSchema)

export default BankingUsers;