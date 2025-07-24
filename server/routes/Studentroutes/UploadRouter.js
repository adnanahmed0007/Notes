import sendPdfStudent from "../../controllers/Student/Send/Sendpdfstudent.js";
import ProtectionMiddleware from "../../middleware/ProtectionMiddelware.js";
import upload from "../../middleware/MulterMiddeware.js";
import ViewPdfs from "../../controllers/Student/Send/ViewPdf.js";
import express from "express";
const routerUpload=express.Router();
routerUpload.post("/student/uploadpdf",ProtectionMiddleware,upload.single("pdfFile"),sendPdfStudent);
routerUpload.post("/student/get/pdf",ProtectionMiddleware,ViewPdfs);
export default routerUpload