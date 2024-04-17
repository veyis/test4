import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";



export async function POST(request: NextRequest) {
  const { email, name, message, phone, adults, children, arrivalDate, departureDate } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,

    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.SMTP_EMAIL,
    to: "xperiencetheb@gmail.com",
    cc: "vakgul@gmail.com",
     // cc: email, (uncomment this line if you want to send a copy to the sender)

    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAdults: ${adults}\nChildren: ${children}\nArrival Date: ${arrivalDate}\nDeparture Date: ${departureDate} 
    

    
    )}\nMessage: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
