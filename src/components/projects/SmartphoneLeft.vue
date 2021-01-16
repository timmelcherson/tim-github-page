<template>
  <div class="app-screenshot-container">
    <SvgIcon
      class="app-screenshot-phone"
      :icon-url="'phone.svg'"
      :stroke-anim-duration="2000"
      :stroke-anim-delay="500"
      @animationFinished="finished"
    />

    <transition appear
    appear-active-class="app-fade-enter-active">
      <img :src="require(`@/assets/images/${imagePath}`)" class="app-screenshot left" />
    </transition>
  </div>
</template>

<script>
import SvgIcon from '@/components/global/SvgIcon.vue';
export default {
  components: {
    SvgIcon
  },
  props: {
    imagePath: {
      type: String,
      default: ''
    }
  },
  methods: {
    finished() {
      console.log('parent received animation finished');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/abstracts/_mixins.scss';


</style>
