import {createApp} from 'vue'
import App from './App.vue'
import store from "@/base/store";
import router from "@/router";

const app = createApp(App)

store.dispatch('EDIT_USER_INFO', {id: 1, name: '测试用户'});

app.use(router).use(store).mount('#app');


