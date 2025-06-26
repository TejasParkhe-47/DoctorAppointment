import express from 'express'

import { addDoctor, alldoctors, loginAdmin } from '../controller/adminController.js'

import upload from '../middleware/multer.js'
import authAdmin from '../middleware/authAdmin.js'
import { changeavail } from '../controller/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor',authAdmin, upload.single('image'), addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors', authAdmin, alldoctors)
adminRouter.post('/change-availability', authAdmin, changeavail)


export default adminRouter   