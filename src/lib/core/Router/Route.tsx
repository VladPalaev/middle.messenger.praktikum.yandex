interface IRoute {
	path: UrlString;
	exact?: boolean;
	component: () => any;
}

type UrlString = string; //todo вынести в отдельный файл, данный тип дублируется

export const Route = ({ path, component, exact = false }: IRoute) => {
	const currentURL = window.location.pathname || "/";

	if (exact && path === currentURL && component) {
		return component();
	}

	if (!exact && checkUrl(currentURL, path)) {
		return component();
	}

	return null;
};

function checkUrl(currentUrl: UrlString, path: UrlString) {
	const regexp = new RegExp(path); //todo перенести проверку на начало строки

	return regexp.test(currentUrl);
}
