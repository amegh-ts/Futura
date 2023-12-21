const nodemailer = require('nodemailer');
const mailer = require('../Models/RecoverySchema');
const dotenv = require('dotenv');

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
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
        const mailOption = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Your OTP Code',
            html: `<div>
                    <div style="text-align: center; background-color: #f0f0f0; padding: 20px;">
                        <h1 style="color: #333;">Account Recovery OTP</h1>
                        <p>Hello ${email},</p>
                        <p>Your OTP code is:</p>
                        <h2 style="color: #007bff;">${otp}</h2>
                        <p>This code will expire in 5 minutes.</p>
                        <img src="https://example.com/your-logo.png" alt="Your Logo" style="max-width: 200px; margin-top: 20px;">
                        <p style="margin-top: 20px;">Thank you for using our service!</p>
                    </div>
                </div>
            `,
        };

        console.log("mail option", mailOption);
        const info = await transporter.sendMail(mailOption);
        console.log('Email sent:', info);
        return res.status(200).json({ message: "OTP sent successfully", otp })
    } catch (error) {
        console.error('Error saving verification details:', error);
        return res.status(500).json({ error: 'Error sending OTP' });
    }
};

module.exports = { accountRecovery };
