<template>
  <nav class="nav-container">
    <HamburgerMenu />
  </nav>
</template>

<script>
import HamburgerMenu from "@/components/nav/HamburgerMenu.vue";

export default {
  components: {
    HamburgerMenu
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/abstracts/_mixins.scss';

// .nav-container {
//   @include FlexContainer(flex-end, center);
//   height: 100vh;
//   position: relative;
//   z-index: 10;
// }
</style>
