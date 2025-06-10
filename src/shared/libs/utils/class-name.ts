export const cn = (...classes: Array<string | null | undefined>): string => {
	return classes.filter(className => !!className).join(' ');
};
