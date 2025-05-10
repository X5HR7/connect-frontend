import { urls } from '@shared/libs/utils/url.config.ts';

export const settingsUrlGroups = {
	user: [
		{
			name: 'Моя учётная запись',
			url: urls.SETTINGS_ACCOUNT
		},
		{
			name: 'Аутентификация',
			url: urls.SETTINGS_AUTH
		},
		{
			name: 'Профиль',
			url: urls.SETTINGS_PROFILE
		}
	],
	application: [
		{
			name: 'Внешний вид',
			url: urls.SETTINGS_THEME
		},
		{
			name: 'Голос и видео',
			url: urls.SETTINGS_VOICE_AND_VIDEO
		},
		{
			name: 'Уведомления',
			url: urls.SETTINGS_NOTIFICATIONS
		},
		{
			name: 'Горячие клавиши',
			url: urls.SETTINGS_HOTKEYS
		}
	]
};
