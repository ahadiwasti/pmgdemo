<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <v-card>
      <v-card-title class="text-h5">
        {{ error.errorMessage.code }}
      </v-card-title>
      <v-card-text> {{ error.errorMessage.message }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="closeDialog()">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "errorLayout",
  computed: {
    ...mapGetters({
      error: "error",
      loading: "loading",
    }),
  },

  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    closeDialog() {
      this.dialog = false;
      this.$store.dispatch("ERROR", { status: false, message: "" });
    },
  },
};
</script>
