import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import Toaster from "@meforma/vue-toaster";

const vm = createApp(App)
  .use(Toaster)
  .use(store)
  .use(router)
  .mount("#app");
