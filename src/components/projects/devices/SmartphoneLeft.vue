<template>
  <div class="app-screenshot-container">
    <SvgIcon
      class="app-screenshot-phone"
      :icon-url="'phone.svg'"
      :stroke-anim-duration="2000"
      :stroke-anim-delay="500"
      @animationFinished="finished"
    />

    <transition name="app-fade">
      <img
        v-if="animationComplete"
        :src="require(`@/assets/images/${imagePath}`)"
        class="app-screenshot left"
      />
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
  data() {
    return {
      animationComplete: false,
    };
  },
  methods: {
    finished() {
      console.log('parent received animation finished');
      this.animationComplete = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/abstracts/_mixins.scss';


</style>
