const nodemailer = require('nodemailer');
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();
        
        if (!name || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'loukasxatzialexiou@gmail.com',
                pass: process.env.NODEMAILER_MAIL_SERVER_PASSWORD
            }
        })

        const mailOptions = {
            from: '"Kastri rent a car" <loukasxatzialexiou@gmail.com>',
            to: 'loukasxatzialexiou@gmail.com',
            subject: `Εχετε mail από πελάτη`,
            html:  `<h3><b>Λεπτομέρειες Μηνύματος</b></h3>
                <table>
                    <tr>
                        <td><b>Ονοματεπώνυμο:</b></td>
                        <td>${name}</td>
                    </tr>
                    <tr>
                        <td><b>Email:</b></td>
                        <td>${email}</td>
                    </tr>
                    <tr>
                        <td><b>Μήνυμα:</b></td>
                        <td>${message}</td>
                    </tr>
                </table>`
        }

        // Here, integrate your email sending service (e.g., Nodemailer, SendGrid, etc.)
        // console.log("Sending email:", { name, email, message });

        transporter.sendMail(mailOptions)

        return NextResponse.json({ success: "Email sent successfully!" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}