 import express from "express";
 import Signup from "../../controllers/Student/Authentication/Signup.js";
 import LoginstUDENT from "../../controllers/Student/Authentication/Loginstudent.js";
 const router=express.Router();
 router.post("/student/signup",Signup);
 router.post("/stuednt/login",LoginstUDENT)
 export default router;
