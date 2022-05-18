import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router';
import store from '@/store'
import components from "@/components/UI"
import directives from '@/directives';

const application = createApp(App);

components.forEach(element => {
    application.component(element.name, element)
});

directives.forEach(element => {
    application.directive(element.name, element)
});


application.use(store).use(router).mount('#app');
