<template>
    <div class="note">
        <div class="note__content">
            <div class="note__title">{{note.title}}</div>
            <div class="note__body">{{note.body}}</div>
        </div>
        <div class="note__buttons">
            <custom-button @click="$router.push(`/notes/${note.id}`)">Open</custom-button>
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

<style lang="scss">

</style>
