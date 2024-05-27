import { transporter } from "@/config/configNodemailer";

export async function sendVerificationMail(email: string, username: string, otp: string) {
    try {
        const info = await transporter.sendMail({
            from: 'team.quotus.com', 
            to: email,
            subject: "Verification Mail",
            html: ` 
                <p>Hello <b>${username}</b></p><br>
                <p>Here&apos;s your verification code: <b>${otp}</b></p><br>
                Please verify your email
            `
        });

        if (info) {
            return {
                success: true, 
                message: "Verification email sent successfully"
            }
        }
    } 
    catch (error: any) {
        console.log(error.message)
        return error.message
    }
}