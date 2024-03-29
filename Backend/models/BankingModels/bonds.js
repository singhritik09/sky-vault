import mongoose from "mongoose";

const bondSchema = new mongoose.Schema({
    bondId:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    maxAvailable:{
        type:Number,
        required:true,
    },
    interest:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
    },
    ownership:{
        type:String
    }

});

const Bonds = mongoose.model("bonds", bondSchema)

export default Bonds;