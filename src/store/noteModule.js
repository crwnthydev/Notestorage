import axios from 'axios';

export const noteModule = {
    
    state: () => ({
        limit: 10,
        notes: [],
        page: 1,
        totalPages: 0,
        isLoading: false,
        selectedSort: '',
        searchQuery: '',
        sortOptions: [
            {value: 'title', name: 'By title'},
            {value: 'body', name: 'By content'},
        ],
    }),
    getters: {
		sorted(state){
			return [...state.notes].sort((note1,note2) => {
				return note1[state.selectedSort]?.localeCompare(note2[state.selectedSort]);
			})
		},
		sortedAndSearched(state, getters){
			return getters.sorted.filter(note => note.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
		},
    },
    mutations: {
        setNotes(state, notes){
            state.notes = notes;
        },
        createNote(state, note){
            state.notes.push(note);
        },
        deleteNote(state, note){
            state.notes = state.notes.filter(n => n.id !== note.id);
        },
        editNote(state, note){
           const noteInArray = state.notes.find(x => x.id === note.id)
           noteInArray.title = note.title;
           noteInArray.body = note.body;
        },
        setLoading(state, boolean){
            state.isLoading = boolean;
        },
        setPage(state, page){
            state.page = page;
        },
        setTotalPages(state, totalPages){
            state.totalPages = totalPages;
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery = searchQuery;
        },
    },
    actions: {
		async loadNotes({state, commit}){
			try {
				commit('setPage', state.page += 1);
				const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
					_page: state.page,
					_limit: state.limit,
				}
			});
            commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit));
			commit('setNotes', [...state.notes, ...response.data]);
			} catch(err) {
				console.log(err);
			}
		},
    },
    namespaced: true
}