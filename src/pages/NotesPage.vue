<template>
	<main class="container">
		<custom-input type="text" placeholder="Search" :model-value="searchQuery" @update:model-value="setSearchQuery"></custom-input>
		<div class="row">
			<custom-button @click="showCreateDialog">Create note</custom-button>
			<custom-select :model-value="selectedSort" @update:model-value="setSelectedSort" :titleOption="'Sort notes'" :options="sortOptions"></custom-select>
		</div>
		<custom-dialog v-model:show="createDialogVisible">
			<note-form @create="addNote"></note-form>
		</custom-dialog>
		<custom-dialog v-model:show="editDialogVisible">
			<edit-form @edit="hideEditDialog" :thisNote="editableNote"></edit-form>
		</custom-dialog>
		<note-list v-if="!isLoading" :notes="sortedAndSearched" @remove="removeNote" @edit="showEditDialog"></note-list>
		<div v-if="isLoading" class="is-loading">Loading...</div>
		<div v-intersection="loadNotes" class="observer"></div>
	</main>
</template>

<script>
import NoteForm from "@/components/NoteForm";
import EditForm from "@/components/EditForm";
import NoteList from "@/components/NoteList";
import CustomDialog from "@/components/UI/CustomDialog.vue";

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
	components: {
		NoteForm,
		EditForm,
		NoteList,
		CustomDialog,
	},
	data(){
		return {
			createDialogVisible: false,
			editDialogVisible: false,
			editableNote: {},
		}
	},
	methods: {
		...mapMutations({
			setPage: 'note/setPage',
			setSelectedSort: 'note/setSelectedSort',
			setSearchQuery: 'note/setSearchQuery',
			createNote: 'note/createNote',
			removeNote: 'note/deleteNote',
			editNote: 'note/editNote',
		}),
		...mapActions({
			loadNotes: 'note/loadNotes'
		}),
		addNote(note){
			this.createNote(note)
			this.hideCreateDialog()
		},
		showCreateDialog(note){
			this.createDialogVisible = true;
		},
		hideCreateDialog(){
			this.createDialogVisible = false;
		},
		showEditDialog(note){
			this.editableNote = note;
			this.editDialogVisible = true;
		},
		hideEditDialog(changedNote){
			this.editNote(changedNote);
			this.editDialogVisible = false;
		},

	},
	mounted(){
		
	},
	computed: {
		...mapState({
			limit: state => state.note.limit,
			notes: state => state.note.notes,
			page: state => state.note.page,
			totalPages: state => state.note.totalPages,
			isLoading: state => state.note.isLoading,
			selectedSort: state => state.note.selectedSort,
			searchQuery: state => state.note.searchQuery,
			sortOptions: state => state.note.sortOptions,
		}),
		...mapGetters({
			sorted: 'note/sorted',
			sortedAndSearched: 'note/sortedAndSearched'
		}),
	},
}
</script>

<style lang="scss">
	.observer {
		height: 15px;
		opacity: 0;
		pointer-events: none;
	}
	.note {
		height: 140px;
	}
</style>
