 import nodemailer from "nodemailer"
 const otpgenrated=async(email,floornumber)=>
 {
 const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'julian.spinka@ethereal.email',
        pass: 'hSQerRe5SJu3qNCrjY'
    }
});
// Wrap in an async IIFE so we can use await.
const  Generatecode= async () => {
  const info = await transporter.sendMail({
    from: '"adnan ahmed" <adnanahmed1212204@gmail.com>',
    to: `${email}`,
    subject:`${floornumber}`,
    text:`${floornumber}`, // plain‑text body
    html:`${floornumber}`, // HTML body
  });

  console.log("Message sent:",info);
}
    Generatecode();
}
export default otpgenrated;