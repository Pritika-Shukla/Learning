import express from "express"

const app = express()
const PORT=3000;
app.use(express.json())

const otpStore:Record<string, string> ={};
app.post("/generate-otp",(req,res)=>{
    const email = req.body.email;
    if(!email){
        res.status(400).json({message: "Email is required"})
        return;
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = otp;
    console.log(`OTP for ${email}: ${otp}`); // Log the OTP to the console
    res.status(200).json({ message: "OTP generated and logged" });
  
})
app.listen(`Server running on port ${PORT}`)
