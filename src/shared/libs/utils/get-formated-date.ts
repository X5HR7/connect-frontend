const getFormatedDate = (timestamp: number | Date): string => {
	const date = typeof timestamp === 'number' ? new Date(timestamp) : timestamp;

	const datePart = new Intl.DateTimeFormat('ru-RU', {
		day: '2-digit',
		month: '2-digit',
		year: '2-digit'
	}).format(date);

	const timePart = new Intl.DateTimeFormat('ru-RU', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	}).format(date);

	return `${datePart} ${timePart}`.replace(/\./g, '.');
};
