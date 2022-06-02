<template>
  <v-app>
    <v-main>
      <AppMain />
    </v-main>
  </v-app>
</template>

<script>
import AppMain from "./views/Layout.vue";

export default {
  name: "App",

  components: {
    AppMain,
  },

  data: () => ({
    //
  }),
};
</script>
