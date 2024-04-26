import mongoose from "mongoose";

const bondOrderSchema = new mongoose.Schema({
    bondId:{
        type:Number,
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

const BondsOrder = mongoose.model("bondsOrder", bondOrderSchema)

export default BondsOrder;