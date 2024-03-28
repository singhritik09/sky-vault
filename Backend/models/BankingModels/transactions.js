import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    
    transactionId:{
        type:String,
        required:true,
        unique:true
    },
    amount:{
        type:Number,
        required:true,
    },
    senderId:{
        type:String,
        required:true
    },
    receiverId:{
        type:String,
        required:true,
    },
    time:{
        type:String,
        required:true
    }
    
})

const Transaction = mongoose.model("transactions", transactionSchema)

export default Employees;
