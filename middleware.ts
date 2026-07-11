import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PREFIX = "/@dkmfzf";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname !== "/") return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = PREFIX;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/"],
};
