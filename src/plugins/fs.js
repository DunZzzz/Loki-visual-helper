/* emilien <emilien@emilien-pc>, 2021 */

const { promisify } = require('util');
const { resolve } = require('path');
const fs = require('fs');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const ignoreList = ['node_modules', 'dist', '.git', '.github'];

export async function find_recursive_folder_in_path(path, folder, maxDepth=3) {
	if (maxDepth === 0)
		return null;
	const subdirs = await readdir(path);
	const files = await Promise.all(subdirs.map(async (subdir) => {
		const res = resolve(path, subdir);
		const s = await stat(res)

		if (subdir !== folder && s.isDirectory() && ignoreList.indexOf(subdir) === -1) {
			return find_recursive_folder_in_path(res, folder, maxDepth - 1)
		}
		return subdir === folder ? res : null;
	}));

	return files
		.reduce((a, f) => a.concat(f), [])
		.filter((x) => x != null);
}

export async function build_file_structure(path, maxDepth=3) {
	const structure = {};
	const subdirs = await readdir(path);
	const files = await Promise.all(subdirs.map(async (subdir) => {
		const res = resolve(path, subdir);
		const s = await stat(res)

		if (s.isDirectory() && ignoreList.indexOf(subdir) === -1) {
			return { [subdir]: await build_file_structure(res) };
		} else {
			return { [subdir]:  res };
		}
	}));

	return files
		.reduce((acc, f) => ({ ...acc, ...f }), {});
}
