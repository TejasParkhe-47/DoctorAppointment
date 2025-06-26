import mongoose from "mongoose"
//2
  const connectdb = async()=>{


    mongoose.connection.on('connected',()=>console.log("database connected..."));
    await mongoose.connect(`${process.env.MONGODB_URL}/medico`);

}
export default connectdb   