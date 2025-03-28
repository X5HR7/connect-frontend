import { getNewAccessToken } from '@shared/libs/api/api-client.ts';
import { urls } from '@shared/libs/utils/url.config.ts';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === urls.HOME) {
		return NextResponse.next();
	}

	const isClientNavigation = request.headers.get('x-nextjs-data');
	if (isClientNavigation) {
		return NextResponse.next();
	}
	console.log('Middleware executed for path:', request.nextUrl.pathname);

	const refreshToken = request.cookies.get('refresh_token')?.value;

	if (!refreshToken && !request.nextUrl.pathname.startsWith('/sign')) {
		return NextResponse.redirect(new URL(urls.SIGN_IN, request.url));
	}

	if (refreshToken) {
		try {
			const data = await getNewAccessToken(refreshToken);
			if (data && request.nextUrl.pathname.startsWith('/sign')) {
				return NextResponse.redirect(new URL(urls.FRIENDS, request.url));
			}

			const responseWithToken = NextResponse.next();

			responseWithToken.cookies.set('access_token', data.accessToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === 'production'
			});

			return responseWithToken;
		} catch (error) {
			const response = NextResponse.redirect(new URL(urls.SIGN_IN, request.url));
			response.cookies.delete('refresh_token');
			return response;
		}
	}
	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
