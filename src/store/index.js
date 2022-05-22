import { createStore } from 'vuex';
import { noteModule } from '@/store/noteModule';

export default createStore({
  state: {
    isHomePage: false,
    isListPage: false,
    isInfoPage: false,
  },
  mutations: {
    setHomeTrue(state){
			return state.isHomePage = true
		},
		setHomeFalse(state){
			return state.isHomePage = false
		},
		setListTrue(state){
			return state.isListPage = true
		},
		setListFalse(state){
			return state.isListPage = false
		},
    setInfoTrue(state){
			return state.isInfoPage = true
		},
		setInfoFalse(state){
			return state.isInfoPage = false
		},
  },
  actions: {
  },
  modules: {
    note: noteModule
  }
})
