// Node Mailer - Send Email Examples
// This file demonstrates how to send emails using Node Mailer

var nm = require("nodemailer");  // Import the Node Mailer module

// Configure the mail transport service (Gmail SMTP)
var trans = nm.createTransport({
    host: "smtp.gmail.com",      // Gmail's SMTP server address
    port: 465,                   // Secure port for SMTP (SSL/TLS)
    auth: {
        user: "sender@gmail.com",    // Replace with your Gmail address
        pass: "App Pass"             // Replace with your Gmail App Password
    }
});

// Define the mail options (recipient, subject, content)
var mailoption = {
    from: "sender@gmail.com",        // Sender email address
    to: "receiver@gmail.com",        // Recipient email address
    subject: "Hello",                // Email subject line
    text: "Hire",                    // Plain text version (fallback)
    html: "<h1>Test mail <b>By</b></h1>"  // HTML version of the email
};

// Send the email
trans.sendMail(mailoption, (err, info) => {
    if (err) {
        console.error("Email sending error:", err);  // Log any errors
    }
    console.log("Email sent successfully:", info);  // Log success info
});