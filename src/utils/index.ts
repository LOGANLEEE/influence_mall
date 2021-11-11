const intl = new Intl.NumberFormat('en');
export const numberWithThousandSeperator = (value: any) => {
	try {
		return intl.format(value);
	} catch (error) {
		return value;
	}
};
