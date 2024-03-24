import mongoose from "mongoose";

const loanSchema=new mongoose.Schema({
    loanId:{
        type:String,
        required:true,
        unique:true
    },
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "BankingUsers",
        type:String,
        required: true
    },
    pancardNum:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    interest:{
        type:Number,
        required:true
    },
    amountPermonth:{
        type:Number,
        required:true
    },
    issueDate:{
        type:String,
        required:true
    },
    returnDate:{
        type:String,
        required:true,
    },
    returned:{
        type:Boolean,
        required:true
    },

    mobileNum:{
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "BankingUsers",
        type:String,
        required: true
    },
    approved:{
        type:Boolean
    }

})

const Loan = mongoose.model("loans", loanSchema)

export default Loan;