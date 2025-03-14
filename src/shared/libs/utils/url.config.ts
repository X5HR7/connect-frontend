class UrlConfig {
	public HOME = '/';

	public FRIENDS = '/friends';
	public CHAT = (id: string) => `/chats/${id}`;

	public SETTINGS = '/settings';
	public SIGN_IN = '/sign-in';
	public SIGN_UP = '/sign-up';

	public SERVERS = '/servers';
	public SERVER = (id: string) => `${this.SERVERS}/${id}`;
	public SERVER_SETTINGS = (id: string) => `${this.SERVERS}/${id}/settings`;
}

export const urls = new UrlConfig();
