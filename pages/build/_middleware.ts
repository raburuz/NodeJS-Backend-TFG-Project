import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const url = req.nextUrl.clone().origin;
  const { x_token = '' } = req.cookies;
  const body = {
    x_token,
  };

  const requestedPage = req.page.name;

  try {
    const response = await fetch('http://localhost:3003/api/token/revalidate', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    if (!!data.ok) {
      return NextResponse.next();
    }
    return NextResponse.redirect(`${url}/auth/login?page=${requestedPage}`);
  } catch (error) {
    return NextResponse.redirect(`${url}/auth/login?page=${requestedPage}`);
  }
}
