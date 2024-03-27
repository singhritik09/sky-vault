import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true, 
    auth: {
        user: 'your_username',
        pass: 'your_password' 
    }
});

export async function sendEmail(to, text, html) {
    try {
        let info = await transporter.sendMail({
            from: '"Your Name" <your_email@example.com>', 
            to: to, 
            subject: "Loan application status", 
            text: text, 
            html: html 
        });

        console.log("Message sent: %s", info.messageId);
        return info.messageId;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
}
