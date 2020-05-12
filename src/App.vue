<template>
  <div id="app">
    <v-app>
      <Home v-if="!quizStarted" />
      <Question
        v-if="quizStarted && !quizFinished"
      />
      <Finish v-if="quizFinished" />
    </v-app>
  </div>
</template>

<script>
import Home from "./components/Home";
import Question from "./components/Question";
import Finish from "./components/Finish";
import { mapState, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Home,
    Question,
    Finish,
  },
  computed: {
    ...mapState(["quizStarted","quizFinished"]),
  },
  methods: {
    ...mapActions(['loadData'])
  },
  created() {
    this.loadData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
