import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const publicRoutes = ["/", "/login", "/register"]

const protectedRoutes = ["/dashboard", "/workspace"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("token")?.value

  const isPublic = publicRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"))
  const isProtected = protectedRoutes.some((route) => pathname === route || pathname.startsWith(route + "/"))
  const isApi = pathname.startsWith("/api")
  const isStatic = pathname.startsWith("/_next") || pathname === "/favicon.ico"

  if (isApi || isStatic) {
    return NextResponse.next()
  }

  if (!token && isProtected) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
