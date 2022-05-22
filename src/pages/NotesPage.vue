<template>
	<div class="notes-page">
		<aside class="aside">
			<custom-nav></custom-nav>
			<div class="notes-page__actions">
				<custom-button @click="showCreateDialog">Create note</custom-button>
				<p>Search notes:</p>
				<custom-input type="text" placeholder="Search" :model-value="searchQuery" @update:model-value="setSearchQuery"></custom-input>
				<p>Sort notes:</p>
				<custom-select :model-value="selectedSort" @update:model-value="setSelectedSort" :titleOption="'Sort notes'" :options="sortOptions"></custom-select>
			</div>
		</aside>
		<main class="wrapper">
			<note-list v-if="!isLoading" :notes="sortedAndSearched" @remove="removeNote" @edit="showEditDialog"></note-list>
			<div v-if="isLoading" class="is-loading">Loading...</div>
			<div class="modals">
				<transition name="fade">
					<custom-dialog v-model:show="createDialogVisible">
						<note-form @create="addNote"></note-form>
					</custom-dialog>
				</transition>
				<transition name="fade">
					<custom-dialog v-model:show="editDialogVisible">
						<edit-form @edit="hideEditDialog" :thisNote="editableNote"></edit-form>
					</custom-dialog>
				</transition>
			</div>
			<div v-intersection="loadNotes" class="observer"></div>
		</main>
	</div>
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
		isListPage: false,
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
		this.$store.commit('setListTrue')
	},
	unmounted() {
		this.$store.commit('setListFalse')
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
@import "@/style/pages/notes-page.scss"
</style>
