import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.ZOHO_SMTP_SERVER,
  port: parseInt(process.env.ZOHO_SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.NEXT_PUBLIC_ZOHO_EMAIL,
    pass: process.env.ZOHO_PASSWORD,
  },
});

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    // Send to admin
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_ZOHO_EMAIL,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: `New Contact: ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`,
      replyTo: data.email,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_ZOHO_EMAIL,
      to: data.email,
      subject: 'We Received Your Message',
      text: `Hi ${data.name},\n\nThank you for contacting us. We will get back to you within 24 hours.\n\nBest regards,\nAMR Solar Solutions`,
    });

    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
