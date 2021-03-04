<template>
  <div>
    <!-- Navbar -->
    <template>
      <the-navbar-horizontal />
    </template>
    <!-- Navbar -->

    <div class="content-wrapper">
      <div class="router-view">
        <div class="router-content"></div>

        <div class="content-area__content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbarHorizontal from "../components/navbar/TheNavbarHorizontal.vue";
export default {
  components: {
    TheNavbarHorizontal,
  },
};
</script>

<style lang="scss" scoped>
</style>