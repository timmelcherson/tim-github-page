<template>
  <div class="container-split-grid project-section-container">
    <!-- <Navbar /> -->

    <!-- <div class="container-split-grid"> -->
    <div class="left-section">
      <div class="app-screenshot-container">
        <SmartphoneLeft :image-path="'orkney_folklore_trails.jpg'" />
      </div>
    </div>

    <div class="right-section">
      <h1>Orkney Folklore Trails</h1>
      <p>This is a project made by MEEEE</p>
    </div>

    <!-- </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SmartphoneLeft from '@/components/projects/devices/SmartphoneLeft.vue';

export default {
  name: 'App',
  components: {
    SmartphoneLeft
  },
  computed: {
    ...mapState({
      texts: state => state.textsModule.landingPageTexts
    })
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/abstracts/_mixins.scss';

.project-section-container {
  background: rgb(10, 10, 10);

  &.container-split-grid {
    display: grid;
    height: 100vh;
    grid-template-columns: 1fr 1fr;

    .left-section,
    .right-section {
      justify-self: center;
      align-self: center;
    }

    .right-section {
      @include FlexAlign(center, center);
      flex-direction: column;
      width: 100%;
      height: 100%;
      background: rgb(50, 105, 107);
      h1 {
        color: white;
        font-size: 50px;
        margin-bottom: 20px;
      }
      p {
        color: white;
        font-size: 30px;
      }
    }
  }
}
</style>
