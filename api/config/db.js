import mongoose from "mongoose";


const mongoConnection = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_STRING);
        console.log(`mongoDB connection successfully done`.bgCyan.black);

    } catch (error) {
        console.log(`${error}`.bgRed.white);
    }
}


export default mongoConnection;