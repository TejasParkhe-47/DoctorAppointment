import express from "express"
import cors from "cors"
import "dotenv/config"
import connectdb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import userRouter from "./routes/userRoute.js"

//app config

const app = express()

app.use(
  cors()
);

const port = 6002



connectdb();//5
connectCloudinary();  //6

//middlewares

app.use(express.json());









app.listen(5000, () => {
  console.log('Server running');
});



//api endpoint
app.use('/api/admin',adminRouter)  //localhost:4000/api/admin/add-doctor
app.use("/api/doctor",doctorRouter)
app.use("/api/user",userRouter)



app.get("/",(req,res)=>{
    res.send("api working")

})


app.listen(port,()=> console.log("server started ", port))