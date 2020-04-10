import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    questions: [],
    answers: [],
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    answers(state) {
      return state.answers;
    },
  },
  mutations: {
    updateAnswer(state, currentAnswer) {
      state.answers.push(currentAnswer);
    },
    updateQuestions(state, questions) {
      state.questions = questions.questions;
    },
  },
  actions: {
    updateAnswer(context, currentAnswer) {
      context.commit("updateAnswer", currentAnswer);
    },
    loadData({ commit }) {
      axios.get("/questions.json").then((response) => {
        commit("updateQuestions", response.data);
      });
    },
  },
});

export default store;
