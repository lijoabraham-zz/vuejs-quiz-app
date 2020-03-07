<template>
  <div id="app">
    <v-app>
      <Home v-if="!started" @start-clicked="onClickStartButton" />
      <Question
        v-if="started && !finish"
        @finish-clicked="onClickFinishButton"
      />
      <Finish :answers="answers" :questions="questions" v-if="finish" />
    </v-app>
  </div>
</template>

<script>
import Home from "./components/Home";
import Question from "./components/Question";
import Finish from "./components/Finish";

export default {
  name: "App",
  data: function() {
    return {
      started: false,
      finish: false,
      answers: null,
      questions: null
    };
  },
  components: {
    Home,
    Question,
    Finish
  },
  methods: {
    onClickStartButton(value) {
      this.started = value;
    },
    onClickFinishButton(answers, questions) {
      this.finish = true;
      this.answers = answers;
      this.questions = questions;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
