const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

module.exports.sendVerificationToken = async (userInfo) => {
    const transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        secure: true,
        secureConnection: false, // TLS requires secureConnection to be false
        tls: {
            ciphers: 'SSLv3'
        },
        requireTLS: true,
        port: 465,
        debug: true,
        auth: {
            user: process.env.GODADDY_USER,
            pass: process.env.GODADDY_PASS
        }
    });

    const token = jwt.sign({
        data: {
            _id: userInfo._id,
            email: userInfo.accountInfo.email
        }
    }, process.env.JWT_SECRET, { expiresIn: '10m' }
    );

    const mailConfigurations = {

        // It should be a string of sender/server email
        from: process.env.GODADDY_USER,

        to: userInfo.accountInfo.email,

        // Subject of Email
        subject: 'Email Verification for Wepediatrics account.',

        // This would be the text of email body
        text: `Hi! There, You have recently visited 
               our website and entered your email.
               Please follow the given link to verify your email
               ${process.env.FRONTEND_LINK}/verify?token=${token}
               Thanks`
    };

    await new Promise((resolve, reject) => {
        // send mail
        transporter.sendMail(mailConfigurations, (err, info) => {
            if (err) {
                console.error(err);
                reject(err);
            } else {
                console.log(info);
                resolve(info);
            }
        });
    });

    res.status(200).json({ status: "OK" });
}