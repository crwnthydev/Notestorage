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
@import "@/style/components/UI/dialog.scss"
</style>
