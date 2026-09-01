import nodemailer from 'nodemailer';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  cityLocation: string;
  type: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_SERVER,
      port: parseInt(process.env.ZOHO_SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    // Send to admin only
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_ZOHO_EMAIL,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: `New Contact: ${data.firstName} ${data.lastName}`,
      text: `Name: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nCity/Location: ${data.cityLocation}\nType: ${data.type}\nMessage:${data.message}`,
      replyTo: data.email,
    });

    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
