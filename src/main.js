import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import './global.css'
import App from './App.vue'
import router from './routes/routes';
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init()
const app = createApp(App)
app.use(router)

app.mount('#app')
