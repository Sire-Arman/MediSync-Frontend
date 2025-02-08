const smsApiKey = import.meta.env.VITE_TWILIO_AUTH_TOKEN;
const smsSenderId = import.meta.env.VITE_TWILIO_ACCOUNT_SID;
const myMobileNo = import.meta.env.VITE_TWILIO_PHONE_NUMBER;
export const sendSms = async (mobileNo, message) => {
  try {
      const response = await client.messages.create({
          body: message,
          from: myMobileNo, // Your Twilio number
          to: mobileNo
      });
      console.log('Message sent successfully:', response.sid);
      return response.json();
  } catch (error) {
      console.error('Error sending SMS:', error);
  }
};
