import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import AddCert from './components/AddCert'
import AppHeader from './components/AppHeader'
import VerifyComponent from './components/VerifyComponent'

import App from './App.vue'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/add-doc', component: AddCert},
        { path: '/verify', component: VerifyComponent},
        { path: '/', component: AppHeader}
    ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')