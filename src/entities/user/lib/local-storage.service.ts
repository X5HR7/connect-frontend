import { TKey } from './keys.type.ts';

export const getState = (key: TKey) => {
	return localStorage.getItem(key) === 'true';
};

export const setState = (key: TKey, value: boolean) => {
	localStorage.setItem(key, value.toString());
};
