import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    employeeId:{
        type:String,
        required:true
    },
    role:{
        type:String,
    },
    date:{
        type:Date,
    }

})

const AuditLogs = mongoose.model("audit", employeeSchema)

export default AuditLogs;
