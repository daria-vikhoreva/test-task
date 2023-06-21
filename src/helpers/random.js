export const randomNumberExclude = (array, number = 1) => {
	return array.includes(number) ? randomNumberExclude(array, ++number) : number;
};
