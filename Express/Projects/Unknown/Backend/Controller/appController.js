const nodemailer = require('nodemailer');
const mailer = require('../Models/RecoverySchema');
const dotenv = require('dotenv');

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
})

// Account recovery
console.log('check math.random ====', Math.random());
function generateOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();                // math.floor used to convert the decimal no to integer
}

const accountRecovery = async (req, res) => {
    const { email } = req.body;
    console.log('email===', email);
    const otp = generateOtp();
    const otpExpiration = new Date(Date.now() + 5 * 60 * 1000);
    console.log('-------', otp, otpExpiration, email);
    const verification = new mailer({
        email,
        otp,
        otpExpiration,
    });
    try {
        await verification.save();

        //send otp via mail
        const mailOption={
            from:process.env.EMAIL,
            to:email,
            subject:'Your OTP Code',
            text:`Your OTP code is: ${otp}`
        };

        console.log("mail option",mailOption);
        const info=await transporter.sendMail(mailOption);
        console.log('Email sent:',info);
        return res.status(200).json({message:"OTP sent successfully",otp})
    } catch (error) {
        console.error('Error saving verification details:', error);
        return res.status(500).json({ error: 'Error sending OTP' });
    }
};

module.exports = { accountRecovery };
