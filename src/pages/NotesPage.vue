<template>
	<main class="container">
		<custom-input type="text" placeholder="Search" v-model="searchQuery"></custom-input>
		<div class="row">
			<custom-button @click="showDialog">Create note</custom-button>
			<custom-select v-model="selectedSort" :titleOption="'Sort notes'" :options="sortOptions"></custom-select>
		</div>
		<custom-dialog v-model:show="dialogVisible">
			<note-form @create="createNote"></note-form>
		</custom-dialog>
		<note-list v-if="!isLoading" :notes="sortedAndSearched" @remove="removeNote"></note-list>
		<div v-if="isLoading" class="is-loading">Loading...</div>
		<div v-intersection="loadNotes" class="observer"></div>
	</main>
</template>

<script>
import NoteForm from "@/components/NoteForm";
import NoteList from "@/components/NoteList";
import CustomDialog from "@/components/UI/CustomDialog.vue";
import axios from 'axios';

export default {
	components: {
		NoteForm,
		NoteList,
		CustomDialog,
	},
	data(){
		return {
			dialogVisible: false,
			page: 1,
			limit: 10,
			notes: [],
			isLoading: false,
			selectedSort: '',
			searchQuery: '',
			sortOptions: [
				{value: 'title', name: 'By title'},
				{value: 'body', name: 'By content'},
			],
		}
	},
	methods: {
		createNote(note){
			this.notes.push(note);
			this.hideDialog()
		},
		removeNote(note){
			this.notes = this.notes.filter(n => n.id !== note.id);
		},
		showDialog(){
			this.dialogVisible = true;
		},
		hideDialog(){
			this.dialogVisible = false;
		},
		async loadNotes(){
			try {
				this.page += 1;
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_page: this.page,
					_limit: this.limit,
				}
			});
			this.notes = [...this.notes, ...response.data];
			} catch {
				console.error('load error')
			}
		},
	},
	mounted(){
		this.loadNotes();
	},
	computed: {
		sorted(){
			return [...this.notes].sort((note1,note2) => {
				return note1[this.selectedSort]?.localeCompare(note2[this.selectedSort]);
			})
		},
		sortedAndSearched(){
			return this.sorted.filter(note => note.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
		},
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
