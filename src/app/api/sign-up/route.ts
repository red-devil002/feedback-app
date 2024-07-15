import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";
import bcrypt from "bcryptjs"
import { sendVerificationEmail } from "@/helpers/emailVarification.helper";

export async function POST(req: Request){
    await dbConnect()

    try {
        const { username, email, password } = await req.json();
        
        // algo
        
    } catch (error: any) {
        console.error(" Error registering user: ", error);
        return Response.json({
            success: false,
            message: "Error registering user"
        })
        
    }
}