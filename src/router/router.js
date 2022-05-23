import { createRouter, createWebHashHistory } from "vue-router";
import Main from '@/pages/Main';
import NotesPage from '@/pages/NotesPage';
import About from '@/pages/About';
import NoteInner from '@/pages/NoteInner';

const routes = [
	{
		path: '/',
		component: () => import('@/pages/Main')
	},
	{
		path: '/notes',
		component: () => import('@/pages/NotesPage')
	},
	{
		path: '/about',
		component: () => import('@/pages/About')
	},
	{
		name: 'details',
		path: '/notes/:id',
		component: () => import('@/pages/NoteInner'),
		props: true
	},
]

const router = createRouter({
	routes,
	history: createWebHashHistory(process.env.BASE_URL),
});

export default router;