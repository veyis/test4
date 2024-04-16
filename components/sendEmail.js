// pages/api/sendEmail.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Create a transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.example.com", // Replace with your mail server host
      port: 587,
      secure: false, // True for 465, false for other ports
      auth: {
        user: "your-email@example.com", // Your email
        pass: "your-password", // Your email password
      },
    });

    // Setup email data
    let mailOptions = {
      from: '"Sender Name" <your-email@example.com>', // Sender address
      to: req.body.to, // List of receivers
      subject: req.body.subject, // Subject line
      text: req.body.text, // Plain text body
      html: req.body.html, // HTML body content
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ message: 'Email sent: ' + info.response });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
