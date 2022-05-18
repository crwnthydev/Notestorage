<template>
	<div v-if="show" class="dialog" @click="hideDialog">
		<div @click.stop class="dialog__content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
import toggleMixin from '../../mixins/toggleMixin'

export default {
	name: "custom-dialog",
	mixins: [toggleMixin],
}
</script>

<style lang="scss" scoped>
	.dialog {
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.4);
		position: fixed;

		&__content {
			min-width: 300px;
			min-height: 250px;
			border: 1px solid black;
			background: white;
			padding: 15px;
		}
	}

</style>
