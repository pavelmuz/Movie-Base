import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import router from './router'

import 'nprogress/nprogress.css'
import App from './App.vue'
import progressBar from './includes/progressBar'
import VeeValidatePlugin from './includes/validation'

const app = createApp(App)

app.use(bootstrap)
app.use(createPinia())
app.use(VeeValidatePlugin)
app.use(router)
progressBar(router)

app.mount('#app')
