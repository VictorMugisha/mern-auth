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
