<template>
	<div class="text-center">
		<v-btn
			rounded
			color="primary"
			dark
			medium
			class="mb-3"
			@click="select"
		>
			<span>
				{{ label }}
			</span>
			<v-list-item-icon>
				<v-icon>mdi-folder</v-icon>
			</v-list-item-icon>
		</v-btn>
		<input type="hidden" class="ui-hide" :value="selected" />
	</div>
</template>

<script>
import { openDialog } from '../plugins/dialog';

export default {
	name: 'SelectDirectoy',
	props: {
		label: {
			type: String,
			default: 'Select a directory'
		},
		change: Function
	},
	methods: {
		async select() {
			let r = await openDialog();

			if (r.cancelled)
				return;
			this.$emit('change', r.filePaths[0]);
		}
	},
	data: () => ({
		selected: null
	})
};
</script>

<style lang="scss" scoped>

.ui-hide {
	display: none;
}

.ui-select-dir {
}
</style>

