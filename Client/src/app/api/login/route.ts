import connectDb from "@/lib/mongodb";
import { User } from "@/app/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { comparePassword, signToken } from "@/lib/auth";

export const POST = async (req : NextRequest) => {
    try {
        await connectDb();
        const { email , password } = await req.json();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({success:false , message:"Invalid credentials"}, {status:401});
        }

        const isValid = await comparePassword(password, user.password);
        if (!isValid) {
            return NextResponse.json({success:false , message:"Invalid credentials"}, {status:401});
        }

        const token = signToken({ userId : user._id.toString(), email : user.email });
        const response = NextResponse.json({success:true , user : { id: user._id, name: user.name, email: user.email }});
        response.cookies.set("token", token, {
            httpOnly : true,
            secure : process.env.NODE_ENV === "production",
            sameSite : "lax",
            maxAge : 7 * 24 * 60 * 60,
        });

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({success:false , message:"Internal server error"});
    }
}
