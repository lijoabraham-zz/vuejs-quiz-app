<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="4">
        <v-card class="mx-auto">
          <v-card-title
            class="headline grey lighten-4 text-center"
            primary-title
          >
            Vue JS Quiz
          </v-card-title>
          <v-card-text>
            <p>Click below to start the Quiz</p>
          </v-card-text>
          <v-card-actions>
            <v-flex align-end>
              <v-btn center color="primary" @click="onClickStartButton">
                Proceed
              </v-btn>
            </v-flex>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: function() {
    return {
      //started: false
    };
  },
  methods: {
    onClickStartButton() {
      this.$emit("start-clicked", true);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
