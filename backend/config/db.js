import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connectToDb = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MONGODB Connected: ${connectToDb.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
