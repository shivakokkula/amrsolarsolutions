import nodemailer from 'nodemailer';

export interface ContactFormData {
  firstName: string;
  lastName?: string;
  cityLocation: string;
  type: string;
  email?: string;
  phone: string;
  message?: string;
  // Dynamic fields
  motorCapacity?: string;
  installationRequirement?: string;
  borewellDepth?: string;
  solarCapacity?: string;
  businessName?: string;
  monthlyBill?: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_SERVER || 'smtp.zoho.in',
      port: parseInt(process.env.ZOHO_SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.NEXT_PUBLIC_ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@amrsolarsolutions.com';
    const fullName = `${data.firstName} ${data.lastName || ''}`.trim();

    // Prepare extra dynamic field details
    const dynamicRows: string[] = [];
    if (data.businessName) {
      dynamicRows.push(`<tr><td style="padding: 8px 0; color: #64748b;"><strong>Business Name:</strong></td><td style="padding: 8px 0; color: #0f172a;">${data.businessName}</td></tr>`);
    }
    if (data.solarCapacity) {
      dynamicRows.push(`<tr><td style="padding: 8px 0; color: #64748b;"><strong>Solar Capacity:</strong></td><td style="padding: 8px 0; color: #0f172a; font-weight: bold; color: #d97706;">${data.solarCapacity}</td></tr>`);
    }
    if (data.motorCapacity) {
      dynamicRows.push(`<tr><td style="padding: 8px 0; color: #64748b;"><strong>Motor Capacity:</strong></td><td style="padding: 8px 0; color: #0f172a; font-weight: bold; color: #059669;">${data.motorCapacity}</td></tr>`);
    }
    if (data.installationRequirement) {
      dynamicRows.push(`<tr><td style="padding: 8px 0; color: #64748b;"><strong>Installation Requirement:</strong></td><td style="padding: 8px 0; color: #0f172a;">${data.installationRequirement}</td></tr>`);
    }
    if (data.borewellDepth) {
      dynamicRows.push(`<tr><td style="padding: 8px 0; color: #64748b;"><strong>Borewell Depth:</strong></td><td style="padding: 8px 0; color: #0f172a;">${data.borewellDepth} feet</td></tr>`);
    }
    if (data.monthlyBill) {
      dynamicRows.push(`<tr><td style="padding: 8px 0; color: #64748b;"><strong>Monthly Bill:</strong></td><td style="padding: 8px 0; color: #0f172a;">${data.monthlyBill}</td></tr>`);
    }

    const plainTextDetails = [
      `Name: ${fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email || 'Not provided'}`,
      `District / Village / City: ${data.cityLocation}`,
      `Category: ${data.type}`,
      data.businessName ? `Business Name: ${data.businessName}` : '',
      data.solarCapacity ? `Solar Capacity: ${data.solarCapacity}` : '',
      data.motorCapacity ? `Motor Capacity: ${data.motorCapacity}` : '',
      data.installationRequirement ? `Installation Requirement: ${data.installationRequirement}` : '',
      data.borewellDepth ? `Borewell Depth: ${data.borewellDepth} ft` : '',
      data.monthlyBill ? `Monthly Bill: ${data.monthlyBill}` : '',
      `Message: ${data.message || 'None'}`
    ].filter(Boolean).join('\n');

    // 1. Send Lead Notification Email to AMR Solar Solutions Backend
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_ZOHO_EMAIL,
      to: recipient,
      subject: `New ${data.type} Inquiry: ${fullName}`,
      text: `New Website Inquiry for AMR Solar Solutions\n\n${plainTextDetails}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">New ${data.type} Inquiry - AMR Solar Solutions</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 170px;"><strong>Customer Name:</strong></td><td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Phone:</strong></td><td style="padding: 8px 0; color: #0f172a;"><a href="tel:${data.phone}" style="color: #2563eb; font-weight: bold;">${data.phone}</a></td></tr>
            ${data.email ? `<tr><td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td><td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${data.email}">${data.email}</a></td></tr>` : ''}
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>District / Village / City:</strong></td><td style="padding: 8px 0; color: #0f172a;">${data.cityLocation || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;"><strong>Solar Category:</strong></td><td style="padding: 8px 0; color: #d97706; font-weight: bold;">${data.type}</td></tr>
            ${dynamicRows.join('')}
          </table>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 6px;">
            <strong style="color: #334155;">Customer Message / Notes:</strong>
            <p style="color: #475569; margin: 8px 0 0 0; white-space: pre-wrap;">${data.message || 'No additional message provided.'}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #94a3b8; text-align: center;">
            This email was received via the AMR Solar Solutions website enquiry form.
          </p>
        </div>
      `,
      replyTo: data.email || undefined,
    });

    // 2. Send a copy to the user if an email address was provided
    if (data.email && data.email.trim() && data.email.includes('@')) {
      const userEmail = data.email.trim();
      try {
        await transporter.sendMail({
          from: process.env.NEXT_PUBLIC_ZOHO_EMAIL,
          to: userEmail,
          replyTo: recipient,
          subject: `Copy of Your Inquiry: ${data.type} - AMR Solar Solutions`,
          text: `Dear ${fullName},\n\nThank you for reaching out to AMR Solar Solutions. We have received your inquiry and our solar specialist will contact you shortly.\n\nHere is a copy of the details you submitted:\n\n${plainTextDetails}\n\nDirect Helpline: +91 7569967711 / +91 9347857711\nEmail: info@amrsolarsolutions.com\nHead Office: 1-2 Muthnoor, Velgatoor, Jagtial, India - 505526\nOffice 2: Narapally, Secunderabad, India - 500088`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              
              <!-- Header Banner -->
              <div style="background-color: #0f172a; padding: 20px; border-radius: 8px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px;">AMR SOLAR SOLUTIONS</h1>
                <p style="color: #f59e0b; margin: 6px 0 0 0; font-size: 13px; font-weight: 600;">Powering Homes, Businesses & Farms Across India</p>
              </div>

              <!-- Greeting & Acknowledgment -->
              <div style="margin-top: 24px; padding-bottom: 16px; border-bottom: 1px solid #e2e8f0;">
                <h2 style="color: #0f172a; font-size: 18px; margin: 0 0 10px 0;">Thank you for your enquiry, ${fullName}!</h2>
                <p style="color: #475569; font-size: 14px; line-height: 1.6; margin: 0;">
                  We have received your enquiry regarding <strong>${data.type}</strong>. Our certified solar engineering team has been notified and will review your requirements to contact you shortly.
                </p>
              </div>

              <!-- Copy of Submitted Details -->
              <div style="margin-top: 20px;">
                <h3 style="color: #d97706; font-size: 14px; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 0.5px;">
                  Copy of Your Submitted Details
                </h3>
                
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr>
                    <td style="padding: 9px 0; color: #64748b; width: 180px; border-bottom: 1px solid #f1f5f9;"><strong>Customer Name:</strong></td>
                    <td style="padding: 9px 0; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f1f5f9;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Phone Number:</strong></td>
                    <td style="padding: 9px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Email Address:</strong></td>
                    <td style="padding: 9px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${userEmail}</td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>District / Village / City:</strong></td>
                    <td style="padding: 9px 0; color: #0f172a; border-bottom: 1px solid #f1f5f9;">${data.cityLocation || 'Not specified'}</td>
                  </tr>
                  <tr>
                    <td style="padding: 9px 0; color: #64748b; border-bottom: 1px solid #f1f5f9;"><strong>Solar Category:</strong></td>
                    <td style="padding: 9px 0; color: #d97706; font-weight: bold; border-bottom: 1px solid #f1f5f9;">${data.type}</td>
                  </tr>
                  ${dynamicRows.join('')}
                </table>
              </div>

              ${data.message ? `
              <div style="margin-top: 18px; padding: 14px; background-color: #f8fafc; border-radius: 8px; border-left: 3px solid #f59e0b;">
                <strong style="color: #334155; font-size: 13px;">Your Message / Notes:</strong>
                <p style="color: #475569; font-size: 13px; margin: 6px 0 0 0; white-space: pre-wrap;">${data.message}</p>
              </div>` : ''}

              <!-- Direct Helpline Info -->
              <div style="margin-top: 24px; padding: 16px; background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px;">
                <h4 style="color: #166534; margin: 0 0 8px 0; font-size: 14px;">Need Immediate Assistance?</h4>
                <p style="color: #15803d; font-size: 13px; margin: 0 0 10px 0;">Feel free to contact our direct helplines or message us on WhatsApp anytime:</p>
                <p style="margin: 4px 0; font-size: 13px; color: #0f172a;">
                  📞 <strong>Helpline:</strong> <a href="tel:+917569967711" style="color: #15803d; font-weight: bold; text-decoration: none;">+91 7569967711</a> &nbsp;|&nbsp; <a href="tel:+919347857711" style="color: #15803d; font-weight: bold; text-decoration: none;">+91 9347857711</a>
                </p>
                <p style="margin: 4px 0; font-size: 13px; color: #0f172a;">
                  💬 <strong>WhatsApp:</strong> <a href="https://wa.me/917569967711" style="color: #15803d; font-weight: bold; text-decoration: none;">+91 7569967711</a>
                </p>
                <p style="margin: 4px 0; font-size: 13px; color: #0f172a;">
                  ✉️ <strong>Email:</strong> <a href="mailto:info@amrsolarsolutions.com" style="color: #15803d; font-weight: bold; text-decoration: none;">info@amrsolarsolutions.com</a>
                </p>
              </div>

              <!-- Office Addresses -->
              <div style="margin-top: 20px; font-size: 12px; color: #64748b; line-height: 1.5; border-top: 1px solid #e2e8f0; padding-top: 16px;">
                <p style="margin: 2px 0;"><strong>Head Office:</strong> 1-2 Muthnoor, Velgatoor, Jagtial, India - 505526</p>
                <p style="margin: 2px 0;"><strong>Office 2:</strong> Narapally, Secunderabad, India - 500088</p>
                <p style="margin-top: 12px; text-align: center; color: #94a3b8; font-size: 11px;">
                  This is an automated confirmation copy of the enquiry submitted at AMR Solar Solutions.
                </p>
              </div>
            </div>
          `,
        });
      } catch (userCopyError) {
        console.warn('Warning: Could not deliver user copy email to:', userEmail, userCopyError);
        // Do not throw so the backend submission remains successful
      }
    }

    return true;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}
