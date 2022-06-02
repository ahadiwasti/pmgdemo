<template>
  <v-container class="app-main">
    <screenLoader v-show="loading"></screenLoader>
    <NavbarComponent></NavbarComponent>
    <errorLayout v-if="error.flag == true"></errorLayout>
    <transition-group name="fade-transform" mode="out-in">
      <router-view v-show="loading == false" :key="key" />
    </transition-group>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import NavbarComponent from "../components/blocks/navbar.vue";
import screenLoader from "../components/blocks/loading.vue";
import errorLayout from "../components/blocks/error.vue";
export default {
  name: "AppMain",
  computed: {
    ...mapGetters({
      error: "error",
      loading: "loading",
    }),
    key() {
      return this.$route.fullPath;
    },
  },
  components: {
    NavbarComponent,
    screenLoader,
    errorLayout,
  },
};
</script>
<style>
.font-color-white {
  color: white;
}
article {
  text-align: justify;
}
.ghost-color {
  background: ghostwhite;
}
.v-data-footer {
  float: right;
}
</style>
