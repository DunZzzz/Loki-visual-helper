
<template>
	<v-list dense nav>
		<v-list-group
			v-for="project in projects"
			:key="project.path"
			v-model="project.active"
			prepend-icon="mdi-folder"
			@click="() => load(project)"
		>
			<template v-slot:activator>
				<v-list-item-title>{{ project.title }}</v-list-item-title>
			</template>

			<div v-if="!accessPoints[project.path]" class="d-flex justify-center">
				<v-progress-linear
					indeterminate
					color="blue"
				/>
			</div>
			<DrawerLoki
				v-for="accessPoint in accessPoints[project.path]"
				:key="accessPoint"
				:project="project"
				:path="accessPoint"
			/>
		</v-list-group>
	</v-list>
</template>

<script>
import { find_recursive_folder_in_path } from '@/plugins/fs';
import DrawerLoki from './DrawerLoki';

export default {
	name: 'DrawerProjectList',
	components: { DrawerLoki },
	methods: {
		load(project) {
			find_recursive_folder_in_path(project.path, '.loki')
				.then((res) => {
					this.accessPoints = {
						...this.accessPoints,
						[project.path]: res
					}
				})
				.catch((err) => {
					console.error(err);
					this.accessPoints = {
						...this.accessPoints,
						[project.path]: undefined
					}
				});
		}
	},
	computed: {
		projects() { return this.$store.state.app.projects; }
	},
	data: () => ({
		accessPoints: {}
	})
};
</script>
