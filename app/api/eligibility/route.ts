import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  return NextResponse.json({
    result: [],
    status: "success",
    message: "MongoDB disabled in demo mode",
  });
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { requirement, uae, fname, lname, email, phone } = await req.json();

    if (!email || !fname) {
      return NextResponse.json(
        {
          status: "Error",
          message: "Please provide all required fields.",
        },
        { status: 400 }
      );
    }

    console.log("Skipping MongoDB save - demo mode active");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "tbcgulfmarketing@gmail.com",
        pass: "gyqj dwxp nrmo qobv",
      },
    });

    const mailOptions = {
      from: "tbcgulfmarketing@gmail.com",
      to: "info@zahads.com",
      subject: "Eligibility Check from Website",
      text: `Someone wants to check visa eligibility:

Name: ${fname} ${lname || ""}
Email: ${email}
Phone: ${phone || "N/A"}
Meet Requirements: ${requirement || "N/A"}
In UAE: ${uae || "N/A"}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Thank you for sending inquiry, we will revert back shortly.",
      status: "success",
    });
  } catch (error: unknown) {
    console.error(error);
    return NextResponse.json(
      {
        status: "Error",
        message: "Something went wrong while sending email.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
};
