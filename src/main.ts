import MyButton from './components/Button.vue';
import type { App } from 'vue'

const components : any = {
    MyButton
}

export default (app : App,) => {
    Object.keys(components).forEach(key => {
        app.component(key, components[key]);
    });
}

export { MyButton }
