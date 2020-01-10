import store from "./store";
import {
  reduxListPrice,
  reduxUsers,
  reduxDashboard
} from "./actions";

window.store = store;
window.users = reduxUsers;
window.listPrice = reduxListPrice;
window.dashboard = reduxDashboard;
