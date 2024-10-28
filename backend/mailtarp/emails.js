import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificatonToken) => {
  const recipients = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificatonToken
      ),
      category: "Email Verification",
    });

    console.log("Email Send Successfuly", response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

export const sendWelcomeEmail = async (email, userName) => {
  const recipients = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipients,
      template_uuid: "da59e06f-9133-4db9-b8d9-ef3e2e670aca",
      template_variables: {
        company_info_name: "Auth Company",
        name: userName,
      },
    });

    console.log("Welcome email sent successfuly: ", response)
  } catch (error) {
    console.error("Error sending welcome email: ", error);
    throw new Error(`Error sending welcome email: ${error.message}`);
  }
};