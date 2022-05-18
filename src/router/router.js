import { createRouter, createWebHashHistory } from "vue-router";
import Main from '@/pages/Main';
import NotesPage from '@/pages/NotesPage';
import About from '@/pages/About';
import NoteDetails from '@/pages/NoteDetails';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/notes',
        component: NotesPage,
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/notes/:id',
        component: NoteDetails,
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL),
});

export default router;