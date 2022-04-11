import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  if (req.nextUrl.pathname === "/") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    console.log(session)
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
  
    if (!session) return NextResponse.redirect("/home");
    // If user is authenticated, continue.
  }
  else if (req.nextUrl.pathname === "/home") {
    const session = await getToken({
      req,
      secret: process.env.JWT_SECRET,
      secureCookie: process.env.NODE_ENV === "production",
    });
    console.log(session)
    // You could also check for any property on the session object,
    // like role === "admin" or name === "John Doe", etc.
  
    if (session) return NextResponse.redirect("/");
    // If user is authenticated, continue.
  }
}
