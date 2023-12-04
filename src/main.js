import { createApp } from 'vue';
import App from "./App.vue";
import { createRouter, createWebHistory } from 'vue-router';
import Create from './components/Create.vue';
import Read from './components/Read.vue';
import Update from './components/Update.vue';
import Delete from './components/Delete.vue';



const router = createRouter({
  history: createWebHistory(),
    routes: [
    { path: '/create', component: Create },
    { path: '/read', component: Read },
    { path: '/update', component: Update },
    { path: '/delete', component: Delete },
  ],
});
const app = createApp(App);
app.use(router);

app.component('Create', Create);
app.component('Read', Read);
app.component('Update', Update);
app.component('Delete', Delete);
app.mount("#app");