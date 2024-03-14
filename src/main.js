import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { RouterLink } from 'vue-router'
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5YP_9p4mXXaQ56wcyPQK9BYi1GYCCPfs",
    authDomain: "componente-9cc01.firebaseapp.com",
    projectId: "componente-9cc01",
    storageBucket: "componente-9cc01.appspot.com",
    messagingSenderId: "864925616177",
    appId: "1:864925616177:web:45102df16ef2a1db5cad10"
};
initializeApp(firebaseConfig);
const app = createApp(App)
app.use(router)

app.component('RouterLink', RouterLink) // Register RouterLink globally if needed
app.mount('#app')
