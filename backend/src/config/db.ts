import mongoose from "mongoose";
import envConfig from "./config";

const connectToDatabase = async () => {
    try {

       await  mongoose.connect(envConfig.mongodbString as string)
    } catch (error) {
        console.log("failed  to connect db")
        process.exit(1)
    }
}

export default connectToDatabase