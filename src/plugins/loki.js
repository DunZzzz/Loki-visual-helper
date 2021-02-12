/* emilien <emilien@emilien-pc>, 2021 */

// Expect file_structure as parameter, see ./fs.js
export const is_valid_loki_directory = async (f) => (
	f.current && f.difference && f.reference
);


export function isObject(item) {
	return (item && typeof item === 'object' && !Array.isArray(item));
}

export default function mergeDeep(target, source) {
	let output = Object.assign({}, target);
	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach(key => {
			if (isObject(source[key])) {
				if (!(key in target))
					Object.assign(output, { [key]: source[key] });
				else
					output[key] = mergeDeep(target[key], source[key]);
			} else {
				Object.assign(output, { [key]: source[key] });
			}
		});
	}
	return output;
}

const filePattern = /(^[^_]+)_([^_]+)_(.+)\.png/;

export const format_file_structure_loki = async (f) => {
	let res = {};

	let explore_in_folder = (folder) => {
		for (let [ key, value ] of Object.entries(f[folder])) {
			if (typeof value !== 'string') return;
			const found = key.match(filePattern);
			if (found === null) return;

			res = mergeDeep(res, {
				[found[3]]: {
					[folder]: {
						[found[2]]: value,
					}
				}
			});
		};
	};

	explore_in_folder('current');
	explore_in_folder('difference');
	explore_in_folder('reference');

	return res;
};
