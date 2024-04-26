import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    query:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    }
})

const Query = mongoose.model("query", querySchema)

export default Query;
