import { getNewAccessToken } from '@shared/libs/api/api-client.ts';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	const isClientNavigation = request.headers.get('x-nextjs-data');
	if (isClientNavigation) {
		return NextResponse.next();
	}
	console.log('Middleware executed for path:', request.nextUrl.pathname);

	const refreshToken = request.cookies.get('refresh_token')?.value;

	if (!refreshToken && !request.nextUrl.pathname.startsWith('/sign')) {
		return NextResponse.redirect(new URL('/sign-in', request.url));
	}

	if (refreshToken) {
		try {
			const data = await getNewAccessToken(refreshToken);
			if (data && request.nextUrl.pathname.startsWith('/sign')) {
				return NextResponse.redirect(new URL('/', request.url));
			}

			const responseWithToken = NextResponse.next();
			responseWithToken.cookies.set('authData', JSON.stringify(data), {
				httpOnly: false,
				secure: process.env.NODE_ENV === 'production'
			});

			return responseWithToken;
		} catch (error) {
			return NextResponse.redirect(new URL('/sign-in', request.url));
		}
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
