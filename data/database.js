import mongoose from "mongoose";
export const connectDB = async () => {
  try {
     mongoose.connect(`${process.env.MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
        console.log("mongodb is connected")
    });

    console.log(`Server connected to database `);
  } catch (error) {
    console.log("Some Error Occurred", error);
    process.exit(1);
  }
};