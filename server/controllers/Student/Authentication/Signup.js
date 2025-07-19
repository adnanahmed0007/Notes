
import signupSchema from "../../../models/Student/SignupModel.js";
import GenerateToken from "../../../utils/GenerateToken.js";
import bcrypt from "bcrypt"
const Signup=async(req,res,next)=>
{
    try{
         const {email,admissionNumber,department,password}=req.body;
      if(email&&admissionNumber&&department&&password)
      {
        
  const hashpasswordd=await bcrypt.hash(password,10);
        const findStudentemail=await signupSchema.findOne({$or:[
            {email:email.trim().toLowerCase()},
            {admissionNumber}
        ]});
     
        if(findStudentemail)
        {
            return res
            .status(400)
            .json({
                message:"student is alreadt register"
            })
        }
        const newUserSignup=new signupSchema({
            email:email.trim().toLowerCase(),
            admissionNumber,
            department,
            password:hashpasswordd,
        })
        if(!newUserSignup)
        {
            return res
            .status(400)
            .json({
                message:"we cant save user detaild in databse"
            })

        }
          const generateTpkensignup=await GenerateToken(newUserSignup._id,res)
          console.log(generateTpkensignup)
        const save=await newUserSignup.save();
        if(!save)
        {
            return res
            .status(400)
            .json({
                message:"we could  or save the uers"
            })
        }
        
            return res
        .status(200)
        .json({
            message:"user data saved successfully",
            newUserSignup,
        })
             

        
       
            
                
                   
        
      }
         

    }
    catch(e)
    {
        console.log(e)

    }

}
export default Signup;