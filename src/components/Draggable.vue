
<template>
	<div :id="did" class="ui-draggable" :data-active-drag="active" @mousedown.stop>
		<slot />
	</div>
</template>

<script>
import panzoom from 'panzoom';

let inst = null;
let ev = null;
let rv = null;
export default {
	name: 'Draggable',
	data: () => ({
		did: `did-${ Math.random().toString(36).substr(2) }`,
		active: false,
	}),
	mounted() {
		const elem = document.getElementById(this.did);

		inst = panzoom(elem, {
			bounds: true,
		});

		ev = document.addEventListener('keydown', (k) => {
			if (k.code !== 'Space' || k.repeat) return;
			this.active = true;
		});

		rv = document.addEventListener('keyup', (k) => {
			if (k.code !== 'Space' || k.repeat) return;
			this.active = false;
		});
	},
	destroyed() {
		inst && inst.dispose();
		ev && document.removeEventListener(ev);
		rv && document.removeEventListener(rv);
	},
};
</script>

<style>

.v-main__wrap {
	cursor: grab;

	&:focus {
		outline: none;
	}
}

</style>
<style lang="scss" scoped>

.ui-draggable {
	cursor: default;
	height: 100%;

	&[data-active-drag] {
		pointer-events: none;
	}
}

</style>

