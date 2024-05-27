import { transporter } from "@/config/configNodemailer";

export async function sendVerifiedEmail(email: string, username: string) {
    try {
        const info = await transporter.sendMail({
            from: 'team.quotus.com', 
            to: email,
            subject: "Verified Successfully",
            html: ` 
                <h3>Hello <b>${username}</b></h3><br>
                <h3>You have been successfully verified</h3>
            `
        });
    } catch (error: any) {
        console.log(error.message)
        return error.message
    }
}

