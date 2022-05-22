<template>
	<div class="details">
		<header class="header">
			<custom-nav></custom-nav>
		</header>
		<div class="container">
			<note-details></note-details>
			<custom-button @click="$router.push('/notes')">Back to list</custom-button>
		</div>
	</div>
</template>

<script>
import NoteDetails from "@/components/NoteDetails";

export default {
	components: {
		NoteDetails,
	},
}
</script>

<style lang="scss">
@import "@/style/pages/note-inner.scss"
</style>
