import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createDatabase } from './database';

loadFonts()

createDatabase();

createApp(App)
    .use(store)
    .use(vuetify)
    .mount('#app');
