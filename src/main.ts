import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import './style.css'
import App from './App.vue'
import { MyButton } from '@/components';

const MyComponentLibrary = {
    install: (app) => {
        app.component('MyButton', GuruButton);
    }
    };MyButton
    
export {vuetify, GuruComponentLibrary, MyButton};

const vuetify = createVuetify()





createApp(App).use(vuetify).mount('#app')
