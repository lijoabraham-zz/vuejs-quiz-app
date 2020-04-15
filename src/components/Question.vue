<template>
  <v-container class="quiz-inner-block">
    <div class="title-quiz"><h1>Vue.js Quiz</h1></div>
    <v-card
      v-show="showQuestion(index)"
      v-for="(question, index) in getQuestions"
      v-bind:key="question.qid"
      class="mx-auto"
    >
      <v-card-title class="headline text-center" primary-title>
        <v-chip class="q-chip ma-2" color="blue" text-color="white">
          {{ index + 1 }} / {{ getQuestions.length }}
        </v-chip>
        <span class="question">{{ question.question }}</span>
      </v-card-title>
      <v-card-text>
        <v-radio-group
          column
          :rules="[(v) => !!v || 'Item is required']"
          required
        >
          <v-radio
            class="q-radio ma-1"
            v-for="option in question.options"
            :key="option.oid"
            :label="option.answer"
            :value="option.oid"
            @change="selectedAnswer(question.qid, option.oid)"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-flex offset-xs10 align-end>
          <v-btn
            v-show="qIndex + 1 < getQuestions.length"
            @click="goToNextQuestion()"
            right
            large
            color="success"
            dark
          >
            Next
          </v-btn>
          <v-btn
            v-show="qIndex + 1 === getQuestions.length"
            @click="finishQuiz()"
            right
            large
            color="success"
            dark
          >
            Finish
          </v-btn>
        </v-flex>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Question",
  data() {
    return {
      qIndex: 0,
      currentAnswer: null,
    };
  },
  methods: {
    showQuestion(index) {
      return this.qIndex == index;
    },
    updateAnswer(currentAnswer) {
      this.$store.dispatch("updateAnswer", currentAnswer);
    },
    goToNextQuestion() {
      if (this.currentAnswer == null) {
        alert("Please select one answer");
        return false;
      }
      this.updateAnswer(this.currentAnswer);
      this.qIndex++;
      this.currentAnswer = null;
    },
    selectedAnswer(qid, oid) {
      this.currentAnswer = { qid, oid };
    },
    finishQuiz() {
      if (this.currentAnswer == null) {
        alert("Please select one answer");
        return false;
      }
      this.goToNextQuestion();
      if (this.qIndex == this.getAnswers.length) {
        this.$emit("finish-clicked", this.answers, this.getQuestions);
      }
    },
  },
  computed: {
    getQuestions: function() {
      return this.$store.getters.questions;
    },
    getAnswers: function() {
      return this.$store.getters.answers;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz-inner-block {
  max-width: 820px;
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  -webkit-box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.16);
  box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.16);
}
.quiz-inner-block .title-quiz {
  background-color: #e4edfd;
  text-align: center;
  padding: 16px 0;
  margin: 0;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;
}
.q-chip {
  background-color: #c2dfff;
  color: #fff;
  line-height: 26px;
  font-size: 16px;
  border-radius: 20px;
  padding: 5px 10px;
  -webkit-box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.16);
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.16);
  font-weight: 700;
  font-family: Roboto, sans-serif;
  color: rgba(0, 0, 0, 0.6);
}
.question {
  font-size: 19px;
  font-family: Roboto, sans-serif;
  line-height: 32px;
  margin: 0 0 0 10px;
  color: rgba(0, 0, 0, 0.6);
}
.q-radio {
  background-color: #f3f3f3;
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 20px;
  color: #818181;
}
.q-btn {
  color: white !important;
  font-family: Roboto, sans-serif;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.42857;
  padding: 10px 25px;
  cursor: pointer;
  display: inline-block;
  border: 1px solid transparent;
  vertical-align: middle;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;
  outline: none;
  margin-bottom: 0;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  background-image: none;
}
</style>
