<template>
	<div class="note">
		<div class="note__content">
			<div class="note__identificator">ID: {{note.id}}</div>
			<div class="note__title">{{note.title}}</div>
			<div class="note__body">{{note.body}}</div>
		</div>
		<div class="note__buttons">
			<router-link :to="{name: 'details', path: `/notes/${note.id}`, params: note}">Details</router-link>
			<custom-button @click="$emit('edit', note)">Edit</custom-button>
			<custom-button @click="$emit('remove', note)">Delete</custom-button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		note: {
			type: Object,
			required: true,
		}
	}
}
</script>

<style lang="scss" scoped>
@import "@/style/components/note-item.scss";
</style>
