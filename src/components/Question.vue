<template>
  <v-container fluid>
    <v-card class="mx-auto">
      <v-card-title
        style="margin: 0 auto;display: block;background-color: aliceblue;"
        class="headline grey lighten-4 text-center"
        primary-title
      >
        Question
      </v-card-title>
      <v-card-text>
        <p>Click below to start the Interview</p>
      </v-card-text>
      <v-card-actions style="margin: 0 auto;display: block;">
        <v-btn @click="started = true" color="red lighten-2">
          Proceed
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Question",
  data: function() {
    return {};
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
