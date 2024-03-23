import mongoose from "mongoose";
import { MONGODB_URI, DB_NAME } from "./constants.js";


const connectDB = async () => {
    try {
        const connectionInstance=await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected: ${connectionInstance.connection.host}`)
        console.log("Database: ",DB_NAME)
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

export default connectDB