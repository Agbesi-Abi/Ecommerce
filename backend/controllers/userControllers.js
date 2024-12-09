import userModel from "../models/userModel.js";
import bycrpt from "bcrypt";
import jwt from 'jsonwebtoken';
import validator from "validator";



const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}


//Route for user login
const loginUser = async (req,res) => {
    try {
        
        const{email,password} = req.body;

        const user = await userModel.findOne({email});

        if (!user){
            return res.json({success:false, message:"User does not exist"})
        }
        const isMatch = await bycrpt.compare(password, user.password);

        if (isMatch){
            const token = createToken(user._id)
            res.json({success:true,token})
        }

        else{
            res.json({success:false, message: 'Invalid Credentials'})
        }
    } catch(error){
        console.log(error);
        res.json({success:false, message:error.message})
 
    }


}


//Route for user register
const registerUser = async (req,res)=> {
    try{

        const{name, email, password} = req.body;

        //checking user already exists or not
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false, message:"User already exists"})

        }

        //validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success: false, message:"Please enter a valid email"})
        }

        if(password.length < 8){
            return res.json({success: false, message:"Please enter a strong password"})
        }

        //hashing user password
        const salt = await bycrpt.genSalt(10)
        const hashedPassword = await bycrpt.hash(password,salt)

        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)
        res.json({success:true,token})

    }catch(error){
        console.log(error);
        res.json({success:false, message:error.message})

    }

}

//Route for admin login

const adminLogin = async(req,res) => {
    try {

        const {email,password}= req.body

        if (email === process.env.ADMIN_EMAIL && password ===process.env.ADMIN_PASSWORD){
           const token = jwt.sign(email+password,process.env.JWT_SECRET);
           res.json({success:true,token})
        }else{
            res.json({success:false, message: error.message})
        }
    } catch (error) {
        
    }

}

export {loginUser,registerUser,adminLogin}