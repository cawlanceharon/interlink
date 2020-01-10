import {
  REDUX_LIST_PRICE,
  REDUX_USERS,
  REDUX_DASHBOARD
} from "../constants/action-types";

const initialState = {
  users: {},
  dashboard: {},
  list: {
    price: {},
  },
};

function rootReducer(state = initialState, action) {
  // if (action.type === ADD_ARTICLE) {
  //   return Object.assign({}, state, {
  //     articles: state.articles.concat(action.payload)
  //   });
  // }

  if (action.type === REDUX_LIST_PRICE) {
    return Object.assign({}, state, {
      list: {
        price: action.payload,
      },
    });
  }

  if (action.type === REDUX_USERS) {
    return Object.assign({}, state, {
      users: action.payload,
    });
  }

  if (action.type === REDUX_DASHBOARD) {
    return Object.assign({}, state, {
      dashboard: action.payload,
    });
  }

  return state;
}

export default rootReducer;