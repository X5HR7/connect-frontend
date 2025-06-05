interface ISolution {
	title: string;
	items: string[];
}

export const data: ISolution[] = [
	{
		title: 'Оптимизация производительности:',
		items: [
			'Code splitting через динамический импорт',
			'Мемоизация компонентов',
			'Виртуализированные списки для длинных переписок'
		]
	},
	{
		title: 'Структура проекта:',
		items: [
			'Feature-Sliced Design подход',
			'Чёткое разделение на слои (app, widgets, features, entities, shared)',
			'Кастомные хуки для повторяющейся логики'
		]
	},
	{
		title: 'Работа с API:',
		items: ['Единая точка для API-запросов', 'Интеграция с React Query', 'Обработка ошибок и retry-логика']
	},
	{
		title: 'WebSocket интеграция:',
		items: ['Централизованный менеджер соединений', 'Система подписок на события', 'Обработка разрывов соединения']
	}
];
