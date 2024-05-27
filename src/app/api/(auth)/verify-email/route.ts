import connectDB from "@/lib/dbConnect";
import UserModel from "@/models/user.model";
import { sendVerifiedEmail } from "@/lib/sendVerifiedEmail";

export async function POST(request: Request) {
    await connectDB();

    try {
        const { username, otp } = await request.json();
        const decodedUsername = decodeURIComponent(username);

        const user = await UserModel.findOne({username: decodedUsername})

        if (!user) {
            return Response.json({
                success: false,
                message: "User not found"
            }, { status: 404 })
        }

        const isCodeValid = user.verifyCode === otp;
        const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

        if (isCodeValid && isCodeNotExpired) {
            user.isVerified = true
            await user.save()

            sendVerifiedEmail(user.email, user.username)

            return Response.json({
                success: true,
                message: "User verified successfully"
            }, { status: 200 })
        }
        else if (!isCodeNotExpired) {
            return Response.json({
                success: false,
                message: "Verification code has expired, please signup again to get a new code"
            }, { status: 400 })
        }
        else {
            return Response.json({
                success: false,
                message: "Verification code is incorrect"
            }, { status: 400 })
        }
    } 
    catch (error: any) {
        console.log(error.message)
        return Response.json({
            success: false,
            message: "Unable to verify email"
        }, { status: 500 }
    )
    }
}

function verifiedEmail(email: string, username: string) {
    throw new Error("Function not implemented.");
}
