const nodemailer = require('nodemailer');
const mailer = require('../Models/RecoverySchema');
const dotenv = require('dotenv');


// Account recovery
console.log('check math.random ====', Math.random());
function generateOtp() {
    return Math.floor(1000 + Math.random() * 9000).toString();
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
    } catch (error) {
        console.error('Error saving verification details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { accountRecovery };
