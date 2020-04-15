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
      let n = 10;
       var result = new Array(n),
        len = questions.questions.length,
        taken = new Array(len);
      if (n > len){
        console.log(n,len);
        throw new RangeError("getRandom: more elements taken than available");
      }
      while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = questions.questions[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
      }
      state.questions = result;
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
