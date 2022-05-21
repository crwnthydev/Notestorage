<template>
    <nav class="navbar">
        <custom-button class="navbar__home" title="Home" @click="$router.push('/')">Home</custom-button>
        <div class="navbar__wrapper">
            <custom-button class="navbar__button" title="Note list" @click="$router.push('/notes')">Note list</custom-button>
            <custom-button class="navbar__button" title="Information" @click="$router.push('/about')">Information</custom-button>
        </div>
    </nav>
</template>

<script>
	export default {
		name: "custom-nav",
    }
</script>

<style lang="scss">

</style>
