<template>
  <div id="hamburger-menu" @click="toggleMenu">
    <span class="menu-stroke upper" :class="{ 'show-menu': showMenu }" />
    <span class="menu-stroke center" :class="{ 'show-menu': showMenu }" />
    <span class="menu-stroke lower" :class="{ 'show-menu': showMenu }" />

    
    <span class="menu-stroke closed top" :class="{ 'show-menu': showMenu }" />
    <span class="menu-stroke closed bottom" :class="{ 'show-menu': showMenu }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
}
</script>

<style lang="scss" scoped>

$menuWidth: 100px;
$menuHeight: 50px;
#hamburger-menu {
  position: absolute;
  top: 20px;
  left: 15px;
  width: 40px;
  height: 24px;
  z-index: 10;

  &:hover {
    cursor: pointer;
  }

  .menu-stroke {
    position: absolute;
    width: 100%;
    height: 2px;
    right: 0;
    border-radius: 3px;
    background: cyan;
    transition: all .15s linear;

    &.upper {
      top: 0px;
      transition-delay: .4s;

      &.show-menu {
        transition-delay: 0s;
        transform: translateX(100%);
        opacity: 0;
      }
    }

    &.center {
      top: 11px;
      transition-delay: .3s;

      &.show-menu {
        transform: translateX(100%);
        transition-delay: .1s;
        opacity: 0;
      }
    }

    &.lower {
      top: 22px;
      width: 70%;
      transition-delay: .2s;

      &.show-menu {
        transform: translateX(100%);
        transition-delay: .2s;
        opacity: 0;
      }
    }
    
    &.closed {
      &.top {
        top: 10px;
        opacity: 0;
        transition-delay: .1s;
        transform: rotate(-45deg) translateX(100%);

        &.show-menu {
          transform: rotate(-45deg) translateX(0);
          transition-delay: .4s;
          opacity: 1;
        }
      }

      &.bottom {
      top: 10px;
      opacity: 0;
      transform: rotate(45deg) translateX(100%);
      transition-delay: 0s;
        &.show-menu {
          transform: rotate(45deg) translateX(0);
          transition-delay: .3s;
          opacity: 1;
        }
      }
    }
  }
}
</style>