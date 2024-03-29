import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    
    transactionId:{
        type:String,
        required:true,
        unique:true
    },
    userId:{
        type:String,
        required:true
    },
    receiverId:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    time:{
        type:String,
        required:true
    }
    
})

const UserTransaction = mongoose.model("usertransactions", transactionSchema)

export default UserTransaction;
