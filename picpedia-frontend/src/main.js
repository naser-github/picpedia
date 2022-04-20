import { createApp } from 'vue'

// root importers
import App from "./App.vue";
import store from "./store/index";
import router from "./router/index";

//axios imports
import axios from "axios";
import VueAxios from "vue-axios";

//tailwind
import './index.css'

//flowbite
import 'flowbite';



const app = createApp(App);

app.use(VueAxios, axios);

app.config.productionTip = false;

app.use(router);
app.use(store);
app.mount("#app");
