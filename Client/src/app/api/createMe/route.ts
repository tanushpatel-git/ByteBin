import connectDb from "@/lib/mongodb";
import { User } from "@/app/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword, signToken } from "@/lib/auth";
import { nanoid } from "nanoid";

export const POST = async (req: NextRequest) => {
    try {
        await connectDb();
        const merchantCode = nanoid(10); 
        const { name, email, password } = await req.json();

        const existing = await User.findOne({ email });
        if (existing) {
            return NextResponse.json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await hashPassword(password);
        const user = await User.create({ name, email, password: hashedPassword, merchantCode });

        const token = signToken({ userId: user._id.toString(), email: user.email });
        const response = NextResponse.json({ success: true, user: { id: user._id, name: user.name, email: user.email } });
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60,
        });

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "Internal server error" });
    }
}