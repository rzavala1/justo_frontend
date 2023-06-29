import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

  const cookie = request.cookies.get('Authorization')?.value;

  if(cookie===undefined){
    if(request.nextUrl.pathname === '/register'){
      return NextResponse.next();
    }else if(request.nextUrl.pathname === '/login'){
      return NextResponse.next();
    }else{
      return NextResponse.rewrite(new URL('/login', request.url))
    }
  }else{
    if(request.nextUrl.pathname === '/register'){
      return NextResponse.rewrite(new URL('/', request.url))
    }else if(request.nextUrl.pathname === '/login'){
      return NextResponse.rewrite(new URL('/', request.url))
    }else if(request.nextUrl.pathname === '/'){
      return NextResponse.rewrite(new URL('/hits', request.url))
    }else if(request.nextUrl.pathname === '/hits/create'){
      const user = request.cookies.get("user")?.value;
      if(user){
         const userJson=JSON.parse(user);
         console.info(userJson)
         if(userJson?.roleId===3){
          return NextResponse.rewrite(new URL('/hits', request.url))
         }
         return NextResponse.next();
      }
    }else{
      return NextResponse.next();
    }
  }
}

export const config = {
  matcher: ['/((?!auth|_next/static|favicon.ico).*)']
}