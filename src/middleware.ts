import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getNewAccessToken } from '@shared/libs/api/api-client.ts';
import { urls } from '@shared/libs/utils/url.config.ts';

export async function middleware(request: NextRequest) {
	if (request.nextUrl.pathname === urls.HOME) {
		return NextResponse.next();
	}

	const referer = request.headers.get('referer');
	const isComingFromHome = referer && new URL(referer).pathname === urls.HOME;
	const isGoingToFriends = request.nextUrl.pathname.startsWith('/friends');

	const isClientNavigation =
		request.headers.get('sec-fetch-dest') === 'empty' ||
		request.headers.get('next-router-prefetch') === '1' ||
		request.headers.get('RSC') === '1';

	// ?????
	if (isClientNavigation && !(isComingFromHome && isGoingToFriends)) {
		return NextResponse.next();
	}
	console.log('Middleware executed for path:', request.nextUrl.pathname);

	const refreshToken = request.cookies.get('refresh_token')?.value;

	// если нет refresh токена и запрос не на страницы авторизации
	if (!refreshToken && !request.nextUrl.pathname.startsWith('/sign')) {
		return NextResponse.redirect(new URL(urls.SIGN_IN, request.url));
	}

	if (refreshToken) {
		try {
			// пробуем получить access токен
			const data = await getNewAccessToken(refreshToken);
			if (data && request.nextUrl.pathname.startsWith('/sign')) {
				return NextResponse.redirect(new URL(urls.FRIENDS, request.url));
			}

			const responseWithToken = NextResponse.next();

			responseWithToken.cookies.set('access_token', data.accessToken, {
				httpOnly: false,
				secure: process.env.NODE_ENV === 'production'
			});

			return responseWithToken;
		} catch (error) {
			// если refresh токен невалиден
			const response = NextResponse.redirect(new URL(urls.SIGN_IN, request.url));
			response.cookies.delete('access_token');
			response.cookies.delete('refresh_token');
			return response;
		}
	}

	// если нет refresh токена и запрос на страницу авторизации
	const response = NextResponse.next();
	response.cookies.delete('access_token');
	return response;
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
