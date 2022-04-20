import {
  createStore
} from "vuex";

import auth from "./modules/auth";
import addImage from "./modules/addImage";
import photo from "./modules/photo";

const store = createStore({
  modules: {
    auth: auth,
    addImage:addImage,
    photo:photo,
  },
  state() {
    return {
      base_url: "http://127.0.0.1:8000/api",
      isValid: true
    };
  },
  actions: {
    updateIsValid(context) {
      context.commit("updateIsValid")
    }
  },
  getters: {
    isValid(state) {
      return state.isValid
    },
    baseUrl(state){
      return state.baseUrl;
    }
  },
  mutations: {
    updateIsValid(state){
      state.isValid = !state.isValid;
    }
  },
});

export default store;