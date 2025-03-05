export const requiredFieldErrorMessage = 'Обязательно';
export const invalidEmailAddress = 'Некорретный email адрес';
export const minLength = (length: number) => ({ value: length, message: `Минимальная длина: ${length}` });
export const maxLength = (length: number) => ({ value: length, message: `Максимальная длина: ${length}` });
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
