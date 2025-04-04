export const getFormatedDate = (timestamp: number | Date): string => {
	const date = new Date(timestamp);

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
