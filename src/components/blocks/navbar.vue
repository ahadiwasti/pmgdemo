<template>
  <div class="navbar">
    <v-toolbar dense>
      <v-toolbar-title>
        <router-link to="/"> SWAPI Challenge </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn plain small @click="$router.push('/films')"> FILMS </v-btn>

      <v-btn plain small @click="$router.push('/starships')"> STARSHIPS </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped></style>
