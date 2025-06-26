

import validator from "validator";
import bcrypt from "bcrypt"
import { v2 as cloudinary } from "cloudinary"
import doctorModel from "../models/doctorModel.js";
import jwt from 'jsonwebtoken'



//api for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
        const imagefile = req.file;


        //checking for all data
        if (!name|| !email|| !password|| !speciality|| !degree|| !experience || !about|| !fees|| !address ) {
            console.log(name, email, password, speciality, experience, about, fees, address, degree, imagefile)
            return res.json({ success: false, message: "missing details" });
        }





        //validate email

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "please enter valid email" });


        }

        //validating strong pass
        if (password.length < 8) {
            return res.json({ success: false, message: "please enter stroong password" });

        }
        //hashing the password

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password, salt)

        //upload image to cloudinary

        let imageurl = 'nope'
        if (imagefile != undefined) {
            const imageupload = await cloudinary.uploader.upload(imagefile.path, { resource_type: "image" })

            imageurl = imageupload.secure_url
        }


        const doctordata = {
            name,
            email,
            image: imageurl,
            password: hashedpassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newdoctor = new doctorModel(doctordata);
        await newdoctor.save()

        res.json({ success: true, message: "doctor added" });



    } catch (error) {
        console.log("admincontroller error")
        console.log(error)
        res.json({succes:false,message:error.message})
    }
}




//api for admin login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;


        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET)
            res.json({ success: true, token })
        } 
        
        else {
            res.json({ success: false, message: "invalid details" })
        }
    }
    catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}


//all doctors list

const alldoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({ success: true, doctors })
    }
    catch (error) {
        console.log(error)
        res.json({ successs: false, message: error.message })
    }
}



export { addDoctor, loginAdmin, alldoctors }