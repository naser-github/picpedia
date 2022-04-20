<template>
  <section>
    <!-- Navbar -->
    <!-- <nav-bar v-if="this.$store.getters.getToken"></nav-bar> -->
    <nav-bar v-if="getToken"></nav-bar>
    <!-- /.navbar -->
    <router-view :key="$route.fullPath" />
  </section>
</template>


<script>
import navBar from "./components/base/navBar.vue";

export default {
  components: {
    navBar,
  },

  computed: {
    getToken() {
      return this.$store.getters.getToken;
    },
  },

  created() {
    this.$store.dispatch("checkLogin");
    if (!this.getToken) {
      this.$router.replace("/login");
    }
  },
};
</script>