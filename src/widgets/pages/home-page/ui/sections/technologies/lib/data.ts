interface ITechData {
	title: string;
	items: ITechDataItem[];
}

interface ITechDataItem {
	name: string;
	description: string;
}

export const data: ITechData[] = [
	{
		title: 'Основные технологии:',
		items: [
			{
				name: 'Next.js 15',
				description: 'с App Router для серверного рендеринга и маршрутизации'
			},
			{
				name: 'React 19',
				description: 'с хуками и функциональными компонентами'
			},
			{
				name: 'TypeScript',
				description: 'для строгой типизации'
			}
		]
	},
	{
		title: 'Управление состоянием:',
		items: [
			{
				name: 'Zustand',
				description: '— легковесный state-менеджер для клиентского состояния'
			},
			{
				name: 'TanStack Query (React Query)',
				description: 'для управления серверным состоянием и кэширования'
			}
		]
	},
	{
		title: 'Взаимодействие в реальном времени:',
		items: [
			{
				name: 'Socket.IO',
				description: 'для двусторонней коммуникации'
			},
			{
				name: 'WebRTC',
				description: 'для медиа-потоков в голосовых каналах'
			}
		]
	}
];
