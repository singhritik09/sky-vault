import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeId:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    mobileNum:{
        type:Number,
        unique:true,
    },
    role:{
        type:String
    }
})

const Employees = mongoose.model("employee", employeeSchema)

export default Employees;
