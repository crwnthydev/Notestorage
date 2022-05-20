<template>
    <form @submit.prevent>
        <h2>Create a note</h2>
        <custom-input v-focus type="text" v-model="note.title"></custom-input>
        <custom-textarea type="text" v-model="note.body"></custom-textarea>
        <custom-button type="button" @click="create">Create</custom-button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            note: {
                id: '',
                title: '',
                body: '',
            }
        }
    },
    methods: {
        create(){
            this.note.id = Date.now();
            this.$emit('create', this.note)
            this.note = {
                id: '',
                title: '',
                body: '',
            }
        },
    }
}
</script>

<style lang="scss">

</style>
