import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, role, services, goals } = body;

    // Here you would typically:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send to a CRM like HubSpot or Salesforce
    
    // For now, we'll just log it and return success
    console.log("Contact form submission:", {
      fullName,
      email,
      role,
      services,
      goals,
      timestamp: new Date().toISOString(),
    });

    // Simulate email sending (replace with actual email service)
    // Example with SendGrid:
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // await sgMail.send({
    //   to: 'contact@vidovermedia.com',
    //   from: 'noreply@vidovermedia.com',
    //   subject: `New Contact Form Submission from ${fullName}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${fullName}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Role:</strong> ${role}</p>
    //     <p><strong>Services:</strong> ${services.join(', ')}</p>
    //     <p><strong>Goals:</strong> ${goals}</p>
    //   `,
    // });

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
