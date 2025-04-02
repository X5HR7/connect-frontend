class UrlConfig {
	public HOME = '/';
	public NOT_FOUND = '/not-found';

	public FRIENDS = '/friends';
	public CHAT = (id: string) => `${this.FRIENDS}/chats/${id}`;

	public SETTINGS = '/settings';
	public SIGN_IN = '/sign-in';
	public SIGN_UP = '/sign-up';

	public SERVERS = '/servers';
	public SERVER = (id: string) => `${this.SERVERS}/${id}`;
	public SERVER_SETTINGS = (id: string) => `${this.SERVERS}/${id}/settings`;
	public SERVER_CHANNEL = (serverId: string, channelId: string) => `${this.SERVERS}/${serverId}/channels/${channelId}`;
}

export const urls = new UrlConfig();
