export const getSecureEmail = (email: string) => {
	const address = email.split('@')[0]?.split('');
	const domain = email.split('@')[1];

	return `${address.map(_ => '*').join('')}@${domain}`;
};

export const getSecurePhone = (phone: string) => {
	const phoneNumbers = phone.split('');
	const securePhoneNumber = phoneNumbers.map((number, index) => {
		if (index < phoneNumbers.length - 4 && index > 1) {
			return '*';
		} else {
			return number;
		}
	});

	return securePhoneNumber.join('');
};
