<template>
    <div v-if="notes.length > 0" class="notes">
        <h2 class="notes__heading">All notes:</h2>
        <transition-group name="note-list">
            <note-item v-for="note in notes" :key="note.id" :note="note" @remove="$emit('remove', note)" @edit="$emit('edit', note)"></note-item>
        </transition-group>
    </div>
    <div v-else class="no-notes">
        <h2>There are no notes yet</h2>
    </div>
</template>

<script>
import NoteItem from "@/components/NoteItem";

export default {
    components: {
        NoteItem,
    },
    props: {
        notes: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style lang="scss">
    @import "@/style/components/note-list.scss"
</style>
