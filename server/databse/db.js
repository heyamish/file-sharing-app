import mongoose from "mongoose";

const DBConnection = async () => {
    const MONODB_URI = `mongodb+srv://amish:amish@cluster0.ovnvdas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
       await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Databse connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;