import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // If the method is not POST, return 405 Method Not Allowed
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Create a transporter using the environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Setup email data from the request body
    const mailOptions = {
      from: '"Sender Name" <vakgul@gmail.com>', // sender address
      to: req.body.to, // list of receivers
      subject: req.body.subject, // subject line
      text: req.body.text, // plain text body
      html: req.body.html, // HTML body content
    };

    // Send mail with defined transport object
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent: ' + info.response });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
