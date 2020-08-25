<template>
  <div id="floating-button">
    <v-speed-dial
      id="create"
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" color="blue darken-2" dark fab>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-btn fab dark small color="indigo">
        <v-icon>mdi-alarm</v-icon>
      </v-btn>
      <v-btn fab dark small color="pink">
        <v-icon>mdi-lightbulb-outline</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
export default {
  name: "FloatingButton",

  data: () => ({
    direction: "top",
    fab: false,
    fling: false,
    hover: true,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
  }),
};
</script>

<style>
/* This is for documentation purposes and will not be needed in your application */
#floating-button .v-speed-dial {
  position: absolute;
}
#floating-button .v-btn--floating {
  position: relative;
}
</style>