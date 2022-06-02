<template>
  <v-container>
    <StarshipsLayout></StarshipsLayout>
  </v-container>
</template>

<script>
import StarshipsLayout from "../components/starships";
export default {
  name: "HomePage",
  components: {
    StarshipsLayout,
  },
  data: () => ({}),
};
</script>
