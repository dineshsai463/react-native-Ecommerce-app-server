import mongoose from 'mongoose';

export const connectDB =  async ()=>{

    try{
       await mongoose.connect(`${process.env.MONGO_URL}`, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
          console.log("mongodb is connected")
      });
      console.log("mongodb is connected")

    }catch(error){
        console.error(`Error: ${error} `)
        process.exit(1) //passing 1 - will exit the proccess with error
    }

}

export default connectDB