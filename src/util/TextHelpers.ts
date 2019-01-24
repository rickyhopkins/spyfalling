export const pluralize = (count: number, singular: string, plural?: string) => {
	const pluralizedTerm = count === 1 ? singular : plural || singular + "s";
	return `${count} ${pluralizedTerm}`;
};
