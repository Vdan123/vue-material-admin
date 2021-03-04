<template>
  <div class="relative">
    <div class="vx-navbar-wrapper navbar-full p-0">
      <v-app-bar class="navbar-custom navbar-skelton">

        <router-link
          tag="div"
          to="/"
          class="vx-logo cursor-pointer mx-auto flex items-center"
        >
          <logo class="w-10 mr-4 fill-current text-primary" />
          <span class="vx-logo-text text-primary">Vue-Material-admin</span>
        </router-link>

      </v-app-bar>
    </div>
  </div>
</template>

<script>
import Logo from "@/layouts/components/Logo";
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
</style>