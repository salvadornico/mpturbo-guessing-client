import { stateKey } from "@/store/types"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

createApp(App).use(store, stateKey).use(router).mount("#app")
