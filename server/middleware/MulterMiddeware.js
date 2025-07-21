import multer from "multer";
const storage=multer.memoryStorage();
const fileFilter=async(req,file,cb)=>
{
    if(file.mimetype=="appliction/pdf")
    {
        cb(null,true)
    }
    else{
        cb(new Error("only pdf are allowed"))
    }
}
const upload=multer({storage});
export default upload