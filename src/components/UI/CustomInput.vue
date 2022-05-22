<template>
	<input :value="modelValue" @input="updateInput">
</template>

<script>
export default {
	name: "custom-input",
	props: {
		modelValue: [String, Number],
	},
	methods: {
		updateInput(event){
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/style/components/UI/input.scss"
</style>
