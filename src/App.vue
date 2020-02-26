<template>
  <div id="app">
    <v-app>
      <Home v-if="!started" @start-clicked="onClickStartButton" />
      <Question v-if="started" />
    </v-app>
  </div>
</template>

<script>
import Home from "./components/Home";
import Question from "./components/Question";

export default {
  name: "App",
  data: function() {
    return {
      started: false
    };
  },
  components: {
    Home,
    Question
  },
  methods: {
    onClickStartButton(value) {
      this.started = value;
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
