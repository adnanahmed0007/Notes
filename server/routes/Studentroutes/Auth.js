 import express from "express";
 import Signup from "../../controllers/Student/Authentication/Signup.js";
 const router=express.Router();
 router.post("/student/signup",Signup);
 export default router;
