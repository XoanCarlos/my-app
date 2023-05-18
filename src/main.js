import { createApp } from 'vue'
import App from './app/components/App'

import router from './router'

const app = createApp(App).use(router)

app.use(router)
app.mount('#app')
