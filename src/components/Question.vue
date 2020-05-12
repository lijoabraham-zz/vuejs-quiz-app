<template>
  <v-container class="quiz-inner-block">
    <div class="title-quiz">
      <h1 class="title-h1">Vue.js Quiz</h1>
      <circular-count-down-timer
        :initial-value="300"
        :stroke-width="9"
        :seconds-stroke-color="'#6fcbbb'"
        :minutes-stroke-color="'#3a96d5'"
        :underneath-stroke-color="'lightgrey'"
        :size="80"
        :padding="4"
        :minute-label="'minutes'"
        :second-label="'seconds'"
        :show-second="true"
        :show-minute="true"
        :show-hour="false"
        :show-negatives="false"
        @finish="finished"
      ></circular-count-down-timer>
    </div>
    <Dialog></Dialog>
    <v-card
      v-show="showQuestion(index)"
      v-for="(question, index) in questions"
      v-bind:key="question.qid"
      class="mx-auto"
    >
      <v-card-title class="headline text-center" primary-title>
        <v-chip class="q-chip ma-2" color="blue" text-color="white">
          {{ index + 1 }} / {{ questions.length }}
        </v-chip>
        <span class="question">{{ question.question }}</span>
      </v-card-title>
      <v-alert v-show="alert" class="q-alert" type="error">
        Please select one answer
      </v-alert>
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
            v-show="qIndex + 1 < questions.length"
            @click="goToNextQuestion()"
            right
            large
            color="success"
            dark
          >
            Next
          </v-btn>
          <v-btn
            v-show="qIndex + 1 === questions.length"
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
import { mapState, mapActions } from "vuex";
import Dialog from "./Dialog";

export default {
  name: "Question",
  components: {
    Dialog,
  },
  data() {
    return {
      alert: false,
      qIndex: 0,
      currentAnswer: null,
    };
  },
  methods: {
    ...mapActions(["updateDialog", "updateQuizFinished", "updateAnswer"]),
    showQuestion(index) {
      return this.qIndex == index;
    },
    storeAnswer(currentAnswer) {
      this.updateAnswer(currentAnswer);
    },
    goToNextQuestion() {
      if (this.currentAnswer == null) {
        this.alert = true;
        return false;
      }
      this.storeAnswer(this.currentAnswer);
      this.qIndex++;
      this.currentAnswer = null;
      this.alert = false;
    },
    selectedAnswer(qid, oid) {
      this.currentAnswer = { qid, oid };
    },
    finishQuiz() {
      if (this.currentAnswer == null) {
        this.alert = true;
        return false;
      }
      this.goToNextQuestion();
      if (this.qIndex == this.answers.length) {
        this.updateQuizFinished(true);
        this.$router.push({ name: "finish" });
      }
    },
    finished() {
      this.updateDialog(true);
    },
  },
  computed: {
    ...mapState(["questions", "answers", "dialog"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quiz-inner-block {
  max-width: 1000px;
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
  display: flex;
}

.quiz-inner-block .title-h1 {
  padding: 10px;
  flex: 1;
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
.q-alert {
  margin: 0 auto;
  width: 90%;
}
</style>
