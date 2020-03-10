import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    questions: [
      {
        qid: 1,
        question: "Which directive is used to make two-way binding ?",
        options: [
          { oid: 1, answer: "no one" },
          { oid: 2, answer: "v-inline" },
          { oid: 3, answer: "v-on" },
          { oid: 4, answer: "v-model", correct: true }
        ]
      },
      {
        qid: 2,
        question:
          "Which directive is to used to attach event listeners that invoke methods?",
        options: [
          { oid: 5, answer: "v-for" },
          { oid: 6, answer: "v-on" },
          { oid: 7, answer: "v-model" },
          { oid: 8, answer: "v-bind", correct: true }
        ]
      }
    ],
    answers: []
  },
  getters: {
    questions(state) {
      return state.questions;
    },
    answers(state) {
      return state.answers;
    }
  },
  mutations: {
    updateAnswer(state, currentAnswer) {
      state.answers.push(currentAnswer);
    }
  },
  actions: {
    updateAnswer(context, currentAnswer) {
      context.commit("updateAnswer", currentAnswer);
    }
  }
});

export default store;
