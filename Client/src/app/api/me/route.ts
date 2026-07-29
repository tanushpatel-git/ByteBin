import connectDb from "@/lib/mongodb"
import { User } from "@/app/models/user.model"
import { NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import { cacheGet, cacheSet } from "@/lib/redis"

export const GET = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("token")?.value
    if (!token) {
      return NextResponse.json({ success: false, message: "Not authenticated" }, { status: 401 })
    }

    const payload = verifyToken(token)
    if (!payload?.userId) {
      return NextResponse.json({ success: false, message: "Invalid token" }, { status: 401 })
    }

    const cacheKey = `user:${payload.userId}`

    const cached = await cacheGet<{ id: string; name: string; email: string; role: string; navyCode: string; merchantCode: string }>(cacheKey)
    if (cached) {
      return NextResponse.json({ success: true, user: cached, fromCache: true })
    }

    await connectDb()
    const user = await User.findById(payload.userId).select("-password")
    if (!user) {
      return NextResponse.json({ success: false, message: "User not found" }, { status: 404 })
    }

    const userData = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
      navyCode: user.navyCode || "",
      merchantCode: user.merchantCode,
    }

    await cacheSet(cacheKey, userData, 3600)

    return NextResponse.json({ success: true, user: userData })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }
}
