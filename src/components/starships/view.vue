<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <v-container>
    <v-container class="fill-height">
      <v-row>
        <v-toolbar color="blue" elevation="5">
          <strong class="text-h4 font-weight-regular font-color-white">
            {{ ship.name }}
          </strong></v-toolbar
        >
      </v-row>
      <v-row class="ghost-color">
        <v-col cols="8">
          <v-card-title> Model {{ ship.model }} </v-card-title>
          <v-card-subtitle class="pb-2 pt-2">
            Consumables: {{ ship.consumables }}
            <p>Rating: {{ ship.hyperdrive_rating }}</p>
          </v-card-subtitle>
          <v-card-text>
            <article>{{ ship.manufacturer }}</article>
          </v-card-text>
        </v-col>
        <v-col cols="4">
          <v-card-subtitle class="pb-2 pt-2">
            Release date: {{ ship.created | formatDate }}
          </v-card-subtitle>
        </v-col>
      </v-row>
    </v-container>
    <v-btn plain color="primary" tile @click="backToShips()">
      <v-icon left>mdi-arrow-left-circle</v-icon>
      Back
    </v-btn>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "starShipDetails",
  computed: {
    ...mapGetters(["ship"]),
  },
  beforeCreate() {
    this.$store.dispatch("loading", true);
    this.$store
      .dispatch("readship", this.$route.params.slug)
      .then(() => {
        this.$store.dispatch("loading", false);
      })
      .catch((err) => {
        this.$store.dispatch("loading", false);
        this.backToShips();
      });
  },
  data: () => ({}),
  methods: {
    backToShips() {
      this.$router.push({
        name: "starships",
      });
    },
  },
};
</script>

<style></style>
