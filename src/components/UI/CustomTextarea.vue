<template>
	<textarea :value="modelValue" @input="updateInput"></textarea>
</template>

<script>
export default {
	name: "custom-textarea",
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
