export const getErrorMessage = (error?: Error) => {
	if (error) {
		console.warn('getErrorMessage', error);
	}
	return '';
};
