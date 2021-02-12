
<template>
	<v-app>

		<Drawer />
		<!-- Sizes your content based upon application components -->
		<v-main class="grey lighten-5">
			<MainApp />
			<!--
			<v-toolbar collapse>
				<v-app-bar-nav-icon />
				<v-spacer />

				<v-btn icon><v-icon>mdi-phone</v-icon></v-btn>
			</v-toolbar>
			-->
		</v-main>
	</v-app>
	</template>

<script>
import Drawer from './Drawer';
import MainApp from './MainApp';

export default {
	name: 'App',
	components: { Drawer, MainApp },
};
</script>

<style>
html {
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	overflow: hidden;
}
</style>

