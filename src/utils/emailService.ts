import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  return emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: 'saadrandhawa03@gmail.com'
    },
    EMAIL_PUBLIC_KEY
  );
};