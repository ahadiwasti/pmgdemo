<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-toolbar color="blue" elevation="5">
          <strong class="text-h4 font-weight-regular font-color-white">
            Films
          </strong></v-toolbar
        >
        <v-data-table
          :headers="headers"
          :items="films.results"
          :items-per-page="films.count"
          :sort-by.sync="sortBy"
          :loading="loading"
          :sort-desc.sync="sortDesc"
          loading-text="Loading... Please wait"
          class="elevation-1"
          :footer-props="{
            'items-per-page-options': [films.count],
            'disable-items-per-page': true,
          }"
        >
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, viewtip }">
                <v-btn
                  plain
                  color="primary"
                  v-bind="viewtip"
                  v-on="on"
                  @click="viewFilm(item)"
                >
                  <v-icon small class="mr-1"> info </v-icon>
                  View</v-btn
                >
              </template>
              <span>View</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FilmsLayout",
  computed: {
    ...mapGetters({
      films: "films",
      loading: "loading",
    }),
  },
  data: () => ({
    sortBy: "release_date",
    sortDesc: true,
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "title",
      },
      { text: "Producer", sortable: false, value: "producer" },
      { text: "Director", sortable: false, value: "director" },
      { text: "Release", sortable: false, value: "release_date" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),

  mounted() {
    this.$store.dispatch("loading", true);
    this.$store
      .dispatch("initfilmsList")
      .then((res) => {
        this.$store.dispatch("loading", false);
      })
      .catch((err) => {
        this.$store.dispatch("loading", false);
      });
  },
  methods: {
    viewFilm(item) {
      this.$router.push({
        name: "singlefilms",
        params: {
          slug: item.episode_id,
        },
      });
    },
  },
};
</script>
