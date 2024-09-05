import nodemailer from "nodemailer";
import connectToDatabase from "../../lib/mongodb";
import ContactForm from "@/models/ContactFormSchema";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, budget, timeframe, projectDetails } = req.body;
      // Initialize Brevo API client
      const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        auth: {
          user: process.env.BREVO_SMTP_USERNAME,
          pass: process.env.BREVO_SMTP_PASSWORD,
        },
      });

      // Email content with CSS for a professional look
      const emailStyles = `
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            line-height: 1.6;
          }
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          .header {
            text-align: center;
            margin-bottom: 20px;
          }
          .header img {
            max-width: 100%;
            border-radius: 50%;
          }
          .header h1 {
            margin: 10px 0 0;
            font-size: 24px;
            color: #555;
          }
          .content {
            margin: 20px 0;
          }
          .content h3 {
            color: #444;
          }
          .content ul {
            padding: 0;
            list-style-type: none;
          }
          .content ul li {
            margin-bottom: 10px;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            font-size: 12px;
            color: #888;
          }
        </style>
      `;

      // HTML content for submitter email
      const sendSubmitterEmail = {
        from: `"CrypthonLab" <${process.env.BREVO_SENDER_EMAIL}>`,
        to: email,
        subject: "Thank You for Your Submission!",
        html: `
          ${emailStyles}
          <div class="email-container">
            <div class="header">
              <img src="https://res.cloudinary.com/jobifycloud/image/upload/b_rgb:000000/v1724967450/Crypthon-Lab-Logo-1024x273_j4mug3.png" width="100%" alt="Company Logo" />
              <h1>CrypthonLab</h1>
            </div>
            <div class="content">
              <h3>Dear ${name},</h3>
              <p>Thank you for reaching out to us! Our team will review your project details and get back to you soon.</p>
              <p>Here are the details you submitted:</p>
              <ul>
                <li><strong>Budget:</strong> ${budget}</li>
                <li><strong>Timeframe:</strong> ${timeframe}</li>
                <li><strong>Project Details:</strong> ${projectDetails}</li>
              </ul>
              <p>This is an auto-generated email. Please do not reply.</p>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} CrypthonLab. All rights reserved.</p>
            </div>
          </div>
        `,
      };

      // HTML content for owner email
      const sendOwnerEmail = {
        from: `"CrypthonLab" <${process.env.BREVO_SENDER_EMAIL}>`,
        to: process.env.OWNER_EMAIL,
        subject: "New Contact Form Submission",
        html: `
          ${emailStyles}
          <div class="email-container">
            <div class="header">
              <img src="https://res.cloudinary.com/jobifycloud/image/upload/b_rgb:000000/v1724967450/Crypthon-Lab-Logo-1024x273_j4mug3.png" alt="Company Logo" width="100%"/>
              <h1>CrypthonLab</h1>
            </div>
            <div class="content">
              <h3>New Project Submission</h3>
              <p>Details of the submission are as follows:</p>
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Budget:</strong> ${budget}</li>
                <li><strong>Timeframe:</strong> ${timeframe}</li>
                <li><strong>Project Details:</strong> ${projectDetails}</li>
              </ul>
            </div>
            <div class="footer">
              <p>&copy; ${new Date().getFullYear()} CrypthonLab. All rights reserved.</p>
            </div>
          </div>
        `,
      };

      // Send emails and capture response
      const [submitterResponse, ownerResponse] = await Promise.all([
        transporter.sendMail(sendSubmitterEmail),
        transporter.sendMail(sendOwnerEmail),
      ]);

      await connectToDatabase();

      // Save data to MongoDB
      const formData = new ContactForm({
        name,
        email,
        budget,
        timeframe,
        projectDetails,
        emailStatus: "Sent",
      });
      if (ownerResponse.messageId && submitterResponse.messageId) {
        await formData.save();
      }

      res
        .status(200)
        .json({ message: "Form submitted and emails sent successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error submitting form or sending emails" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
