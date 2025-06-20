export const requiredFieldErrorMessage = 'Обязательно';
export const invalidEmailAddressMessage = 'Некорретный email адрес';
export const invalidUsernameMessage = 'Некорретное имя пользователя';
export const minLength = (length: number) => ({ value: length, message: `Минимальная длина: ${length}` });
export const maxLength = (length: number) => ({ value: length, message: `Максимальная длина: ${length}` });
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
export const usernameRegex = /^(?!_|\.)(?!.*\.\.)(?!^[_.]+$)[a-zA-Z0-9_.]+$/;
export const httpsUrlRegex =
	/^https:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
export const invalidUrlMessage = 'Некорректный url адрес';
