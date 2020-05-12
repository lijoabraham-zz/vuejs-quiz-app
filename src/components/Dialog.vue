<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline grey lighten-2 text-center" primary-title>
          Alert
        </v-card-title>

        <v-card-text>
          <p>Your time limit has reached</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" center @click="accept">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Dialog",
  methods: {
    ...mapActions(["updateDialog", "updateQuizFinished"]),
    accept() {
      this.updateDialog(false);
      this.updateQuizFinished(true);
      this.$router.push({ name: "finish" });
    },
  },
  computed: {
    ...mapState(["dialog"]),
  },
};
</script>

<style scoped>
p {
  margin: 15px;
}
</style>
