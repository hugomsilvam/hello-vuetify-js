<template>
  <v-app id="my-keep">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        My Google&nbsp;
        <span class="font-weight-light">Keep</span>
      </span>
      <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="mdi-magnify"></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in firstItems">
          <v-divider v-if="item.divider" :key="i" dark class="my-4"></v-divider>
          <v-list-item v-else :key="i" link :to="item.link">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-for="label in labels">
          <v-list-item :key="label" link :to="'/label/'+label">
            <v-list-item-action>
              <v-icon>mdi-label</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{label}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <template v-for="(item, i) in lastItems">
          <v-divider v-if="item.divider" :key="i+10" dark class="my-4"></v-divider>
          <v-list-item v-else :key="i+10" link :to="item.link">
            <v-list-item-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{item.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <floating-button />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import FloatingButton from "./components/FloatingButton.vue";
import { mapState } from "vuex";
export default {
  name: "App",

  components: { FloatingButton },

  data: () => ({
    drawer: null,
    firstItems: [
      {
        icon: "mdi-lightbulb",
        text: "Notes",
        link: "/notes",
      },
      {
        icon: "mdi-alarm",
        text: "Reminders",
        link: "/reminders",
      },
      { divider: true },
      { icon: "mdi-plus", text: "Create new label", link: "/addlabel" },
    ],
    lastItems: [
      { divider: true },
      {
        icon: "mdi-archive",
        text: "Archive",
        link: "/archive",
      },
      {
        icon: "mdi-delete",
        text: "Trash",
        link: "/trash",
      },
      { divider: true },
    ],
  }),

  computed: {
    ...mapState(["labels"]),
  },
};
</script>

<style>
#my-keep .v-navigation-drawer__border {
  display: none;
}
</style>
