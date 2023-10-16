import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes/router";
import '../public/dist/css/adminlte.css';
import '../public/dist/css/googlefont.css';
import '../public/dist/css/all.min.css';


createApp(App)
  .use(router)
  .mount("#app");