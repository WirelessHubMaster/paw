const { accessToken } = require('../config/google.config');
const nodemailer = require("nodemailer");
const emailFrom = "pawparent.co1@gmail.com";
const emailService = "pawparent.co1@gmail.com";

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: emailFrom,
        clientId: "384511982663-h0b5polp43gn0ii8jac3425qd60e0cgm.apps.googleusercontent.com",
        clientSecret: "pz5rJpwt9XhyEPh641YDBscd",
        refreshToken: "1//04KzKnWBEagTqCgYIARAAGAQSNwF-L9IrH2cuz31v1Uorb_9zs9sRVSv_-hBO_82eAm90Soqk_IlinZaquMDmnyHfwc4c0M-csO8",
        accessToken: accessToken
    }
});

function sendBackSubscriptionEmail(email){
    const mailOptions = {
        from: emailFrom,
        to: email,
        subject: 'Subscription email of paw parent',
        generateTextFromHTML: true,
        html: `<h3><em>Dear ${email},</em></h3><p>Thank you for subscription to paw parent , soon you get all the news from our site</p>`
    };
    
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });
}

function sendBackContactEmail(name, email){
    const mailOptions = {
        from: emailFrom,
        to: email,
        subject: 'Thank you for contacting us at paw parent',
        generateTextFromHTML: true,
        html: `<h3><em>Dear ${name},</em></h3><p>Thank you for subscription to paw parent, soon you get all the news from our site</p>`
    };
    
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        smtpTransport.close();
    });
}

function sendSubscriptionMail(email){
    const mailOptions = {
        from: emailFrom,
        to: emailService,
        subject: "Subcription mail from customer",
        generateTextFromHTML: true,
        html: `<b>Subscription email</b>\n<p>This is a supscription mail from ${email}</p>`
    };
    
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        //smtpTransport.close();
    });

    sendBackSubscriptionEmail(email);
}

function sendContactMail(name, email, message, subject){
    const mailOptions = {
        from: emailFrom,
        to: emailService,
        subject: subject,
        generateTextFromHTML: true,
        html: `<h2>Name: </h2>\n${name}\n<p>${message}</p>`
    };
    
    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : console.log(response);
        //smtpTransport.close();
    });
    sendBackContactEmail(name, email);
}

module.exports = { sendSubscriptionMail, sendContactMail };