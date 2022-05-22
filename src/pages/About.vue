<template>
	<div class="about">
		<header class="header">
			<custom-nav></custom-nav>
		</header>
		<main class="about__content">
			<div class="about__info">
				<p>A Vue.js pet-project by Evgeniy Tretyakov</p>
				<p>Other works: <a tabindex="3" title="Github" target="_blank" href="https://github.com/crwnthydev">github.com/crwnthydev</a></p>
			</div>
			<div class="about__contacts">
				<a tabindex="4" title="Email" href="mailto:evgtdev@gmail.com">evgtdev@gmail.com</a>
				<a tabindex="5" title="Phone" href="tel:+79058396692">+7 905 83 966 92</a>
				<a tabindex="6" title="Telegram" target="_blank" href="https://t.me/hcalf19">Telegram: @hcalf19</a>
			</div>
		</main>
	</div>
</template>

<script>
	export default {
		mounted(){
			this.$store.commit('setInfoTrue')
		},
		unmounted() {
			this.$store.commit('setInfoFalse')
		},
	}
</script>

<style lang="scss">
@import "@/style/pages/about.scss"
</style>
