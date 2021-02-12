
<template>
	<div :id="jid" class="ui-juxtapose">
		<img :src="`file://${left}`" alt="" />
		<img :src="`file://${right}`" alt="" />
	</div>
</template>

<script>
import ImageCompare from 'image-compare-viewer';
const options = {

	// UI Theme Defaults

	controlColor: '#FFFFFF',
	controlShadow: true,
	addCircle: false,
	addCircleBlur: true,

	// Label Defaults

	showLabels: false,
	/*fluidMode: true,*/
	// Smoothing
	smoothing: false,
	/*smoothingAmount: 100,*/

	// Other options
	/*hoverStart: false,*/
	verticalMode: false,
	startingPoint: 50,
};

export default {
	name: 'Juxtapose',
	props: {
		left: String,
		right: String,
	},
	data: () => ({
		jid: `jmg-${ Math.random().toString(36).substr(2) }`
	}),
	mounted() {
		const elem = document.getElementById(this.jid);

		new ImageCompare(elem, options).mount();
	}
};
</script>

<style lang="scss" scoped>

.ui-juxtapose {
	margin: 2rem;
	/*width: 12rem;*/
	/*height: auto;*/
}

</style>

