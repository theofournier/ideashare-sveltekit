export const replaceUrlParam = (url: URL, name: string, value: string) => {
	const newUrl = new URL(url);
	const searchParams = newUrl.searchParams;

	searchParams.set(name, value);

	newUrl.search = searchParams.toString();

	return newUrl;
};
