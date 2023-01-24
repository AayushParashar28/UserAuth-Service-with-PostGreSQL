const {TWILIO_SERVICE_SID , TWILIO_ACCOUNT_SID , TWILIO_AUTH_TOKEN} = process.env;
const client = require('twilio')(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

exports.generateOTP = () => {

    const otp = Math.floor(10000 + Math.random() * 900000)
    return otp;
}

exports.sendOTP = async(otp) => {
    client.messages.create({
      body: otp,
      to:'+91 8102441352',    
      from: '+19896569746'
    })
}