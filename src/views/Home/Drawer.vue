
<template>
	<v-navigation-drawer
		app
		mobileBreakpoint="600"
		miniVariantWidth="300"
	>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title class="title">
					Loki-gui
				</v-list-item-title>
				<v-list-item-subtitle>
					Your loki visual helper
				</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>
		<select-directory label="Add a project" @change="addProject" />
		<v-divider />

		<DrawerProjectList />
	</v-navigation-drawer>

</template>

<script>
import SelectDirectory from '@/components/SelectDirectory';
import DrawerProjectList from './DrawerProjectList.vue';

export default {
	name: 'Drawer',
	components: { SelectDirectory, DrawerProjectList },
	methods: {
		addProject(path) {
			this.$store.dispatch('app/addProject', path);
		}
	},
};
</script>

<style lang="scss" scoped>
</style>


