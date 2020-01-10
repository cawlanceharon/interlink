import {
  REDUX_LIST_PRICE,
  REDUX_USERS,
  REDUX_DASHBOARD
} from "../constants/action-types";

export function reduxListPrice(payload) {
  return { type: REDUX_LIST_PRICE, payload };
}

export function reduxUsers(payload) {
  return { type: REDUX_USERS, payload };
}

export function reduxDashboard(payload) {
  return { type: REDUX_DASHBOARD, payload };
}
