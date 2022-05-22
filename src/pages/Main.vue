<template>
	<div class="home">
		<header class="header">
			<custom-nav></custom-nav>
		</header>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.$store.commit('setHomeTrue')
		},
		unmounted() {
			this.$store.commit('setHomeFalse')
		},
	}
</script>

<style lang="scss">
@import "@/style/pages/main.scss"
</style>
