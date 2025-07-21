import sendPdfStudent from "../../controllers/Student/Send/Sendpdfstudent.js";
import ProtectionMiddleware from "../../middleware/ProtectionMiddelware.js";
import upload from "../../middleware/MulterMiddeware.js";
import express from "express";
const routerUpload=express.Router();
routerUpload.post("/student/uploadpdf",ProtectionMiddleware,upload.single("pdfFile"),sendPdfStudent);
export default routerUpload