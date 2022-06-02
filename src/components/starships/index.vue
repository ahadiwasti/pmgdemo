<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-toolbar color="blue" elevation="5">
          <strong class="text-h4 font-weight-regular font-color-white">
            Starships
          </strong></v-toolbar
        >
        <v-data-table
          :headers="headers"
          :items="ships.results"
          :items-per-page="10"
          :sort-by.sync="sortBy"
          :loading="loading"
          :sort-desc.sync="sortDesc"
          loading-text="Loading... Please wait"
          class="elevation-1"
          :options.sync="options"
          :server-items-length="ships.count"
          :footer-props="{
            'items-per-page-options': [10],
            'disable-items-per-page': true,
          }"
        >
          <template v-slot:[`item.created`]="{ item }">
            <span>
              {{ item.created | formatDate }}
            </span>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, viewtip }">
                <v-btn
                  plain
                  color="primary"
                  v-bind="viewtip"
                  v-on="on"
                  @click="viewStarship(item)"
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
  name: "starshipsLayout",
  computed: {
    ...mapGetters({
      ships: "ships",
      loading: "loading",
    }),
  },
  watch: {
    // ships: {
    //   handler() {
    //     this.options.page = 1;
    //   },
    //   deep: true,
    // },
    options: {
      handler() {
        this.nextPage();
      },
      deep: true,
    },
  },
  data: () => ({
    sortBy: "created",
    sortDesc: true,
    options: {},
    filterOffset: 0,
    filterLimit: 0,
    totalRows: 0,
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Manufacturer", sortable: false, value: "manufacturer" },
      { text: "Cost", sortable: false, value: "cost_in_credits" },
      { text: "Starship Class", sortable: false, value: "starship_class" },
      { text: "Created", sortable: false, value: "created" },
      { text: "Actions", value: "actions", sortable: false },
    ],
  }),

  beforeCreate() {
    this.$store.dispatch("loading", true);
    this.$store
      .dispatch("initshipsList")
      .then((res) => {
        this.$store.dispatch("loading", false);
      })
      .catch((err) => {
        this.$store.dispatch("loading", false);
      });
  },
  methods: {
    viewStarship(item) {
      let id = item.url.charAt(item.url.length - 2);
      this.$router.push({
        name: "starship",
        params: {
          slug: id,
        },
      });
    },
    nextPage() {
      const { page } = this.options;
      this.$store.dispatch("loading", true);
      this.$store
        .dispatch("nextshipList", {
          page,
        })
        .then((res) => {
          this.$store.dispatch("loading", false);
        })
        .catch((err) => {
          this.$store.dispatch("loading", false);
        });
    },
  },
};
</script>
