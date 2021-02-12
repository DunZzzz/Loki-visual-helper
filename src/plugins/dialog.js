/* emilien <emilien@emilien-pc>, 2021 */

const { dialog } = require('electron').remote;

export const openDialog = () => (
	dialog.showOpenDialog({
		properties: [ 'openDirectory' ]
	})
)
