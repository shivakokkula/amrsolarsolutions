import { sendContactEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body.firstName || !body.phone) {
      return Response.json(
        { error: 'Please provide at least your name and phone number.' },
        { status: 400 }
      );
    }

    await sendContactEmail({
      firstName: body.firstName.trim(),
      lastName: body.lastName ? body.lastName.trim() : '',
      cityLocation: body.cityLocation ? body.cityLocation.trim() : '',
      type: body.type ? body.type.trim() : 'Solar Inquiry',
      email: body.email ? body.email.trim() : '',
      phone: body.phone.trim(),
      message: body.message ? body.message.trim() : '',
      motorCapacity: body.motorCapacity ? String(body.motorCapacity).trim() : undefined,
      installationRequirement: body.installationRequirement ? String(body.installationRequirement).trim() : undefined,
      borewellDepth: body.borewellDepth ? String(body.borewellDepth).trim() : undefined,
      solarCapacity: body.solarCapacity ? String(body.solarCapacity).trim() : undefined,
      businessName: body.businessName ? String(body.businessName).trim() : undefined,
      monthlyBill: body.monthlyBill ? String(body.monthlyBill).trim() : undefined,
    });

    return Response.json(
      { 
        success: true, 
        message: body.email 
          ? 'Enquiry submitted successfully. A confirmation copy has been sent to your email.' 
          : 'Enquiry submitted successfully' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Failed to send inquiry. Please try again or call +91 7569967711 directly.' },
      { status: 500 }
    );
  }
}
