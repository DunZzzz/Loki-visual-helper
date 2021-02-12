
<template>
	<div class="ui-main-app">
		<Draggable v-if="modified">
			<v-card elevation="2" outlined>
				<Juxtapose
					:left="Object.values(selected.current)[0]"
					:right="Object.values(selected.reference)[0]"
				/>
			</v-card>
		</Draggable>
		<div v-if="!modified">
			<img :src="left" />
		</div>
	</div>
</template>

<script>
import Juxtapose from '@/components/Juxtapose';
import Draggable from '@/components/Draggable';

export default {
	name: 'MainApp',
	components: { Juxtapose, Draggable },
	computed: {
		selected() { return this.$store.state.app.selected; },
		modified() { return this.$store.getters['app/isModified']; },
	},
	mounted() {
		console.log('HERE', this.$store.state.app.selected);
	},
	data: () => ({
		left: require('@/assets/test/current/chrome_laptop_Example_Button_Primary.png'),
		right: require('@/assets/test/reference/chrome_laptop_Example_Button_Primary.png')
	})
};
</script>

<style lang="scss" scoped>

.ui-main-app {
	display: content;
}
</style>

