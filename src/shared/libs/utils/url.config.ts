class UrlConfig {
	public HOME = '/';
	public NOT_FOUND = '/not-found';

	public FRIENDS = '/friends';
	public CHAT = (id: string) => `${this.FRIENDS}/chats/${id}`;

	private SETTINGS = '/settings';
	public SETTINGS_ACCOUNT = `${this.SETTINGS}/me/account`;
	public SETTINGS_AUTH = `${this.SETTINGS}/me/auth`;
	public SETTINGS_PROFILE = `${this.SETTINGS}/me/profile`;
	public SETTINGS_THEME = `${this.SETTINGS}/me/theme`;
	public SETTINGS_VOICE_AND_VIDEO = `${this.SETTINGS}/me/voice-and-video`;
	public SETTINGS_NOTIFICATIONS = `${this.SETTINGS}/me/notifications`;
	public SETTINGS_HOTKEYS = `${this.SETTINGS}/me/hotkeys`;

	public SIGN_IN = '/sign-in';
	public SIGN_UP = '/sign-up';

	public SERVERS = '/servers';
	public SERVER = (id: string) => `${this.SERVERS}/${id}`;
	public SERVER_SETTINGS = (id: string) => `${this.SERVERS}/${id}/settings`;
	public SERVER_CHANNEL = (serverId: string, categoryId: string, channelId: string, channelType: string) =>
		`${this.SERVERS}/${serverId}/channels/${categoryId}/${channelId}/${channelType.toLowerCase()}`;
}

export const urls = new UrlConfig();
