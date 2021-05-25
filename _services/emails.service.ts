// sendgmail.js
const nodemailer = require('nodemailer')

export const sendgmail = async (service: string, user: string, password: string, sender: string, recipient: string, emailMessage: string) => {
  if (service && user && password && sender && recipient && emailMessage) {

    console.log(service, user, password, sender, recipient)
    console.log(emailMessage)

    const transporter = nodemailer.createTransport({
      service: service,
      auth: {
        user: user,
        pass: password
      }
    })

    const mailOptions = {
      from: sender,
      to: recipient,
      subject: 'Your submitted vehicle information',
      html: emailMessage
    }

    transporter.sendMail(mailOptions, function (error, info) {
      const message = error || info.response
      console.log(message)
    })

    return 'Email info validated'
  } else {
    return 'Email cannot be sent'
  }
}
