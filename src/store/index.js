import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    dialog : false,
    quizStarted : false,
    quizFinished : false,
    questions: [],
    answers: [],
  },
  getters: {
    getStatus(state){
      return state.quizStarted;
    }
  },
  mutations: {
    updateQuizStarted(state, status) {
      state.quizStarted = status;
    }, 
    updateQuizFinished(state, status) {
      state.quizFinished = status;
    }, 
    updateDialog(state, status) {
      state.dialog = status;
    },
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
    refreshDialog({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          commit('updateDialog',true);
          resolve()
        }, 1000)
      })
    },
    updateQuizStarted(context, status) {
      context.commit("updateQuizStarted", status);
    }, 
    updateQuizFinished(context, status) {
      context.commit("updateQuizFinished", status);
    },
    updateDialog(context, status) {
      context.commit("updateDialog", status);
    },
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
