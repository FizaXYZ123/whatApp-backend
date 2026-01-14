const twilio = require("twilio");
require("dotenv").config();

const accountSid = process.env.twilio_account_sid;
const authToken = process.env.twilio_auth_token;
const serviceId = process.env.twilio_service_id;

const client = twilio(accountSid, authToken);

// send otp to phone number

const sendOtpToPohoneNumber = async (phoneNumber) => {
  try {
    console.log(`sending otp to ${phoneNumber}`);

    if (!phoneNumber) {
      throw new Error("Phone number is required");
    }

    const response = await client.verify.v2
      .services(serviceId)
      .verifications.create({
        to: phoneNumber,
        channel: "sms",
      });
    console.log(`this is my otp response ${response}`);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("failed to send otp to phone number");
  }
};

const verifyOtp = async (phoneNumber, otp) => {
  try {
    console.log(`this is my otp ${otp}`);
    console.log(`this is my phoneNo. ${phoneNumber}`);

    const response = await client.verify.v2
      .services(serviceId)
      .verificationChecks.create({
        to: phoneNumber,
        cha,
      });
    console.log(`this is my otp response ${response}`);
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("failed to send otp to phone number");
  }
};

module.export = sendOtpToPohoneNumber;
