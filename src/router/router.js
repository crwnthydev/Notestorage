import { createRouter, createWebHashHistory } from "vue-router";
import Main from '@/pages/Main';
import NotesPage from '@/pages/NotesPage';
import About from '@/pages/About';
import NoteInner from '@/pages/NoteInner';

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
        name: 'details',
        path: '/notes/:id',
        component: NoteInner,
        props: true
    },
]

const router = createRouter({
    routes,
    history: createWebHashHistory(process.env.BASE_URL),
});

export default router;