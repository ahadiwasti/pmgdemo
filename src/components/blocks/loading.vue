<template>
  <v-overlay>
    <v-progress-circular
      :size="100"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>
<script>
export default {
  name: "screenLoader",
  computed: {},
  data() {
    return {};
  },
};
</script>
