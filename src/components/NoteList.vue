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
    .note-list-item {
        display: inline-block;
        margin-right: 5%;
    }
    .note-list-enter-active, .note-list-leave-active {
        transition: all 0.5s;
    }
    .note-list-enter, .note-list-leave-to /* .list-leave-active до версии 2.1.8 */ {
        opacity: 0;
        transform: translateX(15%);
    }
    .note-list-move {
        transition: transform 0.5s;
    }
</style>
