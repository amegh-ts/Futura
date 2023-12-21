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
// console.log('check math.random ====', Math.random());
function generateOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();                // math.floor used to convert the decimal no to integer
}

const accountRecovery = async (req, res) => {
    const { email } = req.body;
    // console.log('email===', email);
    const otp = generateOtp();
    const otpExpiration = new Date(Date.now() + 5 * 60 * 1000);
    // console.log('-------', otp, otpExpiration, email);
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
            html: `
            <div
                style="text-align: center; background-color: #ffffff; max-width: 500px; margin: 0; padding: 0; border-radius: 15px;">
                <div style="width: 100%;">
                    <img style="width: 100%; height: 150px; object-fit: cover; border-top-right-radius: 15px; border-top-left-radius: 15px;"
                        src="https://mvix.com/wp-content/uploads/2022/11/googleslideschristmas.jpg" alt="">
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9VvSRtdPpnYcJ4cncksQB4tsyVBzn0NEGeg&usqp=CAU"
                        width="150px" alt="">
                </div>
                <h1 style="color: #e42626; font-family: 'Trebuchet MS', sans-serif; margin-top: 10px;">Merry Christmas,
                    ${email}!</h1>
                <p style="color: #333; font-family: 'Arial', sans-serif; font-size: 18px;">Spread the joy of the season!</p>
                <p style="color: #333; font-family: 'Arial', sans-serif; font-size: 18px;"><i>Your OTP is</i></p>
                <button
                    style="background-color: #e42626; color: white; font-size: 20px; border-radius: 10px; padding: 10px 20px; border: none; cursor: pointer;">${otp}</button>
                <p style="color: #333; font-family: 'Arial', sans-serif; font-size: 16px;">This code will expire in 5
                    minutes.</p>
                <div style="border-top: 1px solid rgb(209, 209, 209);">
                    <p style="color: #333; font-family: 'Arial', sans-serif; font-size: 16px;">You received this email
                        because you requested an OTP to recover your account. If you didn't request for an OTP, you can
                        safely ignore this email.</p>
                </div>
                <div
                    style="background-color: #e42626; color: white; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; height: 100px; display: flex; align-items: center; justify-content: space-between; padding: 0px 20px;">
                    <div style="text-align: left; ">
                        <h6 style="font-family: 'Arial', sans-serif;">Terms of Service</h6>
                        <h6 style="font-family: 'Arial', sans-serif;">Privacy Policy</h6>
                    </div>
                    <div>
                        <img src="https://your-christmas-logo-url.png" width="80px" alt="">
                    </div>
                </div>
            </div>
        
            `,
        };

        // console.log("mail option", mailOption);
        const info = await transporter.sendMail(mailOption);
        console.log('Email sent:', info);
        return res.status(200).json({ message: "OTP sent successfully", otp })
    } catch (error) {
        console.error('Error saving verification details:', error);
        return res.status(500).json({ error: 'Error sending OTP' });
    }
};

module.exports = { accountRecovery };
