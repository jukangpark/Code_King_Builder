import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 루트 경로로 접근하면 기본 언어(ko)로 리다이렉트
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/ko", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
