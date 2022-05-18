<template>
    <nav class="navbar">
        <custom-button @click="$router.push('/notes')">PAGE 1</custom-button>
        <custom-button @click="$router.push('/about')">PAGE 2</custom-button>
    </nav>
</template>

<script>
	export default {
		name: "custom-nav",
    }
</script>

<style lang="scss">

</style>
