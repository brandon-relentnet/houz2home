import nodemailer from "nodemailer";


const userEmail = process.env.EMAIL_FROM;
const userPass = process.env.EMAIL_PASS;
const toEmail = process.env.EMAIL_TO || "youremail@example.com";

export async function POST(req) {
  try {
    const { name, email, subject, phone, message } = await req.json();

    // Basic server-side validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Required fields missing." }),
        { status: 400 }
      );
    }

    // Create a transporter object using SMTP or some 3rd-party service
    // For example, using Gmail SMTP (NOT recommended for production)
    // or any other email service credentials:
    let transporter = nodemailer.createTransport({
      service: "gmail", // or your email service
      auth: {
        user: userEmail,
        pass: userPass,
      },
    });

    // Compose the email
    const mailOptions = {
      from: `"${name}" <${userEmail}>`,
      to: toEmail,
      subject: subject || "New Contact Form Submission",
      text: `
        You have a new contact form submission.
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "N/A"}

        Message:
        ${message}
      `,
      // You can also add HTML if needed:
      // html: `<h1>${subject}</h1><p>...etc...</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully." }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email. Try again later." }),
      { status: 500 }
    );
  }
}
