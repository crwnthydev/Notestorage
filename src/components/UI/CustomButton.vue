<template>
	<button class="btn" role="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "custom-button",
}
</script>

<style lang="scss" scoped>
@import "@/style/components/UI/button.scss"
</style>
