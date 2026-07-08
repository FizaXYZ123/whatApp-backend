import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import  generateToken from "../jwt/generateToken.js"

export const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "name , email and password is required" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "email already exist" });
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = await new User({
            name,
            email,
            password : hashedPassword,

        });
       await newUser.save()
    
       if(newUser){
       const jwt =  generateToken(newUser._id);
         return res.status(201).json({ message: "user registered successfully",jwt : jwt , newUser })
       }
    } catch (error) {
     console.log(error);
    }

}

export const login = async (req,res)=>{
    const {email , password} = req.body;
    try {
    const user = await User.findOne({email})

    if(!user){
        return res.status(400).json({message:"user not found"});
    }

    const isMatch = await bcrypt.compare(password , user.password);

    if(!user || !isMatch){
        return res.status(400).json({message:"invalid email or password"})
    }
     const jwt = generateToken(user._id);

     res.status(201).json({message : "user login successfull", jwt : jwt, user})
    } catch (error) {
        console.log(error)
    }
   
}