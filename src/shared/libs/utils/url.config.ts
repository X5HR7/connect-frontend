class UrlConfig {
	public HOME = '/';
	public NOT_FOUND = '/not-found';

	public FRIENDS = '/friends';
	public CHAT = (id: string) => `${this.FRIENDS}/chats/${id}`;

	private SETTINGS = '/settings';
	public SETTINGS_ACCOUNT = `${this.SETTINGS}/account`;
	public SETTINGS_AUTH = `${this.SETTINGS}/auth`;
	public SETTINGS_PROFILE = `${this.SETTINGS}/profile`;
	public SETTINGS_THEME = `${this.SETTINGS}/theme`;
	public SETTINGS_VOICE_AND_VIDEO = `${this.SETTINGS}/voice-and-video`;
	public SETTINGS_NOTIFICATIONS = `${this.SETTINGS}/notifications`;
	public SETTINGS_HOTKEYS = `${this.SETTINGS}/hotkeys`;

	public SIGN_IN = '/sign-in';
	public SIGN_UP = '/sign-up';

	public SERVERS = '/servers';
	public SERVER = (id: string) => `${this.SERVERS}/${id}`;
	public SERVER_SETTINGS = (id: string) => `${this.SERVERS}/${id}/settings`;
	public SERVER_CHANNEL = (serverId: string, categoryId: string, channelId: string, channelType: string) =>
		`${this.SERVERS}/${serverId}/channels/${categoryId}/${channelId}/${channelType.toLowerCase()}`;
}

export const urls = new UrlConfig();
