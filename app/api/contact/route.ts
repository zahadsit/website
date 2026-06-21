import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { isFullName } from '@/lib/utils';

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  return NextResponse.json({
    enquiries: [],
    status: 'success',
    message: 'MongoDB disabled in demo mode',
  });
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    let {
      firstName,
      lastName,
      email,
      phone,
      message,
      company,
      category,
      nationality,
    } = await req.json();

    if (!email || !message || !firstName) {
      return NextResponse.json(
        {
          status: 'Error',
          message: 'Please provide all required fields.',
        },
        { status: 400 }
      );
    }

    if (!lastName && isFullName(firstName)) {
      const names = firstName.split(' ');
      firstName = names[0];
      lastName = names[1];
    }

    // ⚠️ Skip MongoDB (demo mode)
    console.log("Skipping MongoDB save - demo mode active");

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'ahmad.itumun@gmail.com',
        pass: 'utsb chmt gjyi sgxk',
      },
    });

    const mailOptions = {
      from: 'tbcgulfmarketing@gmail.com',
      to: 'info@zahads.com',
      subject: `Zahads - New Enquiry Received - ${new Date().toLocaleString()}`,
      text: `You have a new enquiry from Zahads:
             
             Name: ${firstName} ${lastName || ''}
             Email: ${email}
             Category: ${category || 'N/A'}
             ${nationality ? `Nationality: ${nationality}` : ''}
             ${company ? `Company: ${company}` : ''}
             Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: 'Message sent (Mongo disabled)',
      status: 'success',
    });
  } catch (error: unknown) {
  console.error(error);

  const errorMessage =
    error instanceof Error ? error.message : JSON.stringify(error);

  return NextResponse.json(
    {
      status: 'Error',
      message: 'Something went wrong while sending email.',
      error: errorMessage,
    },
    { status: 500 }
  );
}
};
