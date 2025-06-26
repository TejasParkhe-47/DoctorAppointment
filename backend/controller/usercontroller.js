
import validator from "validator";
import bcrypt from "bcrypt"
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"



//api to register user 

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({ success: false, message: "Missing details" });
    }

    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Enter a valid email" });
    }

    if (password.length < 8) {
      return res.json({ success: false, message: "Password must be at least 8 characters" });
    }

    // Check for existing email
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.json({ success: false, message: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedpassword });

    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.json({ success: true, token });
  } catch (error) {
    console.error("Register Error:", error);
    return res.json({ success: false, message: "Error in registerUser controller" });
  }
};


//api for user login

const userlogin = async(req,res)=>{

 

    try{

        const {email,password} = req.body;
        const user = await userModel.findOne({email})
        console.log("login")

        if(!user){
            
        return res.json({success:false,message:"user does not exist"})

        }

        const ismatch  = await bcrypt.compare(password,user.password)

        if(ismatch){
            const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
            return res.json({success:true,token})
            
        }
        else {
            return res.json({success:false,message:"invalid credietials"})
        }

        
        
        
        

    }
    catch(error){
        console.log(error)
        res.json({success:false,message:error})
    }

}
export {registerUser,userlogin}  