import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const dbConnect = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) //mongoDB database connection
        console.log(`\n MongoDB connected!! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection FAILED: ", error);
        process.exit(1)
    }
}

export default dbConnect