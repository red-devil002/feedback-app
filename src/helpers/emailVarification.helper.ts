import { resend } from "@/lib/resend"
import VerificationEmail from "../../emails/varification.email"
import { ApiResponse } from "@/types/ApiResponse.type"

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Feedback-app Verification code',
            react: VerificationEmail({
                username: username, otp: verifyCode
            }),
          });
        


        return {success: true, message: "Varification Email sent successfully"}
    } catch (emailError) {
        console.error("Error sending verification email", emailError);

        return {success: false, message: "Failed to send varification Email"}
        
    }
}