import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = 'saad_18977';
const EMAIL_TEMPLATE_ID = 'saadtemplate_18977';
const EMAIL_PUBLIC_KEY = '9mbvU317KBo1dkuYU';

export interface EmailData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export const sendEmail = async (data: EmailData): Promise<void> => {
  const templateParams = {
    to_name: 'Saad',
    from_name: data.name,
    from_email: data.email,
    client_email: data.email,
    message: data.message,
    subject: data.subject || `Portfolio Contact: ${data.name}`,
    reply_to: data.email, // This sets the Reply-To header
    date: new Date().toLocaleString()
  };

  return emailjs.send(
    EMAIL_SERVICE_ID,
    EMAIL_TEMPLATE_ID,
    templateParams,
    EMAIL_PUBLIC_KEY
  );
};