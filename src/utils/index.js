/* emilien <emilien@emilien-pc>, 2021 */

import { title } from '@/settings';

const getPageTitle = (pageTitle) => (
	pageTitle ? `${ pageTitle } - ${ title }` : `${ title }`
);

export const setPageTitle = (pageTitle) => {
	document.title = getPageTitle(pageTitle);
};

