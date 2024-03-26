import { Vonage } from '@vonage/server-sdk';

const vonage = new Vonage({
    apiKey: "ed14be5c",
    apiSecret: "XVxUcioW8GNqeC8f"
})


export const sendSms = (number, message) => {
    try {
        const from = "Vonage APIs";
        const to = number;
        const text = message;

        async function sendSMS() {
            await vonage.sms.send({to, from, text})
                .then(resp => { console.log('Message sent successfully'); console.log(resp); })
                .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
        }

        sendSMS();
    } catch (error) {
        console.log(`${error}`.bgRed.black);
    }
}