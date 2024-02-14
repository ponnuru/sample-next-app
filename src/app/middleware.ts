import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAuthenticated = false;
  console.log('Sample middle ware..');
  if (!isAuthenticated) {
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/account"],
};