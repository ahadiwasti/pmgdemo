<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <v-container>
    <v-container class="fill-height">
      <v-row>
        <v-toolbar color="blue" elevation="5">
          <strong class="text-h4 font-weight-regular font-color-white">
            {{ film.title }}
          </strong></v-toolbar
        >
      </v-row>
      <v-row class="ghost-color">
        <v-col cols="8">
          <v-card-title> Episode {{ film.episode_id }} </v-card-title>
          <v-card-subtitle class="pb-2 pt-2">
            Director: {{ film.director }}
            <p>Producer: {{ film.producer }}</p>
          </v-card-subtitle>
          <v-card-text>
            <article>{{ film.opening_crawl }}</article>
          </v-card-text>
        </v-col>
        <v-col cols="4">
          <v-card-subtitle class="pb-2 pt-2">
            Release date: {{ film.release_date }}
          </v-card-subtitle>
        </v-col>
      </v-row>
    </v-container>
    <v-btn plain color="primary" tile @click="backToFilms()">
      <v-icon left>mdi-arrow-left-circle</v-icon>
      Back
    </v-btn>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "filmDetails",
  computed: {
    ...mapGetters(["film"]),
  },
  beforeCreate() {
    this.$store.dispatch("loading", true);
    this.$store
      .dispatch("readFilm", this.$route.params.slug)
      .then(() => {
        this.$store.dispatch("loading", false);
      })
      .catch((err) => {
        this.$store.dispatch("loading", false);
      });
  },
  data: () => ({}),
  methods: {
    backToFilms() {
      this.$router.push({
        name: "films",
      });
    },
  },
};
</script>

<style></style>
