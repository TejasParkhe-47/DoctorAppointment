import mongoose from "mongoose";



//7


const doctorScheme = new mongoose.Schema({
    name:{type:String,required:true},

    email:{type:String,required:true},

    password:{type:String,required:true},

    image:{type:String,required:true},  

    speciality:{type:String,required:true}, //default:'general physician'

    degree:{type:String,required:true},

    experience:{type:String,required:true},

    about:{type:String,required:true},
 
    available:{type:Boolean,default:true},

    fees:{type:Number,required:true},//def:200

    address:{type:Object,required:true},

    date:{type:Number,required:true},

    slots_booked:{type:Object,default:{}}

},{minimize:false})  //to store the empty object in any data we have to add {minimize :false}

const doctorModel = mongoose.models.doctor || mongoose.model('doctor',doctorScheme);

export default doctorModel;      