import mongoose from "mongoose";

const DBConnection = async () => {
    const MONODB_URI = `mongodb+srv://username:username@your_app_name.ovnvdas.mongodb.net/?retryWrites=true&w=majority&appName=your_app_name`;
    try {
       await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Databse connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;