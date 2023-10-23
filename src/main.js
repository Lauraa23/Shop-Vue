import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

library.add(faMagnifyingGlass, faHeart, faBagShopping, faPagelines, faUser);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
