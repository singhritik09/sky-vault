import nodemailer from 'nodemailer';

async function sendEmail(senderEmail, password, receiverEmail, subject, body) {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: senderEmail,
                pass: password            }
        });

        const mailOptions = {
            from: senderEmail, 
            to: receiverEmail,
            subject: subject,
            text: body
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

export default sendEmail;