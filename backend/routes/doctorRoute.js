import express from 'express'
import { doclist } from '../controller/doctorController.js'


const doctorRouter = express.Router()

doctorRouter.get("/list",doclist)

export default doctorRouter