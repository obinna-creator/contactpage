const Contact = require('../contactmodel/contactModel');
const nodemailer = require('nodemailer');
//require("config.js")
require('dotenv').config();


// Create a transporter for sending emails
const transporter = nodemailer.createTransport({
    // Configuration for your email service provider (SMTP, etc.)
    // For example:
    service: 'gmail',
    auth: {
        user: process.env.user,
        pass: process.env.maillpassword
    }
});

exports.submitContactForm = async (req, res) => {
    try {
        const { name, email, message} = req.body;

        // Save contact message to database
        const contactMessage = new Contact({
            name,
            email,
            message
        });
        await contactMessage.save();

        // Send email notification
        await transporter.sendMail({
            from: process.env.user,
            to: process.env.user,
            subject: 'New Contact Message',
            html: `<p>You have received a new contact message:</p>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`
        });

        res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({
            message:error.message
        });
    }
};
