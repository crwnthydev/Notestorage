<template>
    <form @submit.prevent>
        <h2>Edit a note</h2>
        <custom-input v-focus type="text" v-model="note.title"></custom-input>
        <custom-textarea type="text" v-model="note.body"></custom-textarea>
        <custom-button type="button" @click="edit">Submit changes</custom-button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            note: {
                id: this.thisNote.id,
                userId: this.thisNote.userId,
                title: this.thisNote.title,
                body: this.thisNote.body,
            }
        }
    },
    props: {
        thisNote: {
            type: Object,
            required: true,
        }
    },
    methods: {
        edit(){
            // this.note.id = this.thisNote.id;
            this.$emit('edit', this.note)
        },
    }
}
</script>

<style lang="scss">

</style>
