import express from "express"
import { registerUser,userlogin } from "../controller/usercontroller.js"


const userRouter = express.Router()


userRouter.post("/register",registerUser)

userRouter.post("/login",userlogin)


export default userRouter