import signupSchema from "../../../models/Student/SignupModel.js";
import GenerateToken from "../../../utils/GenerateToken.js";
import bcrypt from "bcrypt"
const LoginstUDENT=async(req,res,next)=>
{
    try{
        const {email,password}=req.body;
        if(email&&password)
        {
            const finduser=await signupSchema.findOne({email});
            const userPassword=finduser.password;
            
            if(!finduser)
            {
                return res
                .status(400)
                .json({
                    message:"user not found",
                })
            }
            const chcekpassword=await bcrypt.compare(password,userPassword)
            if(!chcekpassword)
            {
               return res
               .status(400)
               .json({
                message:"wrogn password"
               })
            }
        const generateToken=await GenerateToken(finduser._id,res);
        console.log(generateToken)
        if(!generateToken)
        {
            return res
            .status(400)
            .json({
                message:"errir occured"
            })
        }
        return res
        .status(200)
        .json({
            message:"loging successgully",
            finduser
        })

            
        }

    }
    catch(e)
    {
        console.log(e);
        return res
        .status(400)
        .json({
            message:"error occured",
        })
    }
}
export default LoginstUDENT;