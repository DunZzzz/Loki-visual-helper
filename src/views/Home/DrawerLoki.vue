<template>
	<div class="ui-drawer-root">
		<v-subheader>{{ accessPoint }}</v-subheader>
		<div v-if="!components" class="d-flex justify-center">
			<v-progress-linear
				indeterminate
				color="blue"
			/>
		</div>
		<div v-if="components">
			<v-list-item
				v-for="[key, value] in Object.entries(components)"
				:key="key"
				link
				@click="select(value)"
			>
				<v-list-item-content>
					<v-list-item-title>{{ key.replaceAll('_', ' ') }} </v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</div>
	</div>
</template>

<script>
import { build_file_structure } from '@/plugins/fs';
import {
	is_valid_loki_directory,
	format_file_structure_loki,
} from '@/plugins/loki';

/*<v-list-item-icon>*/
/*<v-icon>mdi-check</v-icon>*/
/*</v-list-item-icon>*/

function indexDiff(s1, s2) {
	let i = 0;

	if (s1 === s2) return -1;
	while (s1[i] === s2[i]) i++;
	return i;
}

export default {
	name: 'DrawerLoki',
	props: {
		project: Object,
		path: String
	},
	methods: {
		select(v) {
			this.$store.dispatch('app/selectProject', v);
		}
	},
	mounted() {
		build_file_structure(this.path)
			.then(res => new Promise((resolve, reject) => {
				if (is_valid_loki_directory(res) === false) {
					reject('Directory doesn\'t have correct format');
				} else { resolve(res); }
			}))
			.then(res => format_file_structure_loki(res))
			.then(res => this.components = res)
			.catch(err => console.error(err));
	},
	computed: {
		accessPoint() {
			return this.path.slice(indexDiff(this.project.path, this.path));
		}
	},
	data: () => ({ components: null })
};
</script>

<style lang="scss" scoped>
</style>

