import connectDb from "@/lib/mongodb";
import { User } from "@/app/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword, signToken } from "@/lib/auth";
import { nanoid } from "nanoid";

export const POST = async (req: NextRequest) => {
    try {
        await connectDb();
        const merchantCode = nanoid(10);
        const { name, email, password }: { name: string; email: string; password?: string } = await req.json();

        let user;
        if (password){
            const hashedPassword = await hashPassword(password!);
            user = await User.create({ name, email, password: hashedPassword, merchantCode });
        }else{
            user = await User.create({ name, email, merchantCode });
        }

        const token = signToken({ userId: user._id.toString(), role: user.role });
        const response = NextResponse.json({ success: true, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
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