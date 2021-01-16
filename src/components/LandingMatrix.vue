<template>
  <div class="main-container-flex-column landing-container">
    <Navbar />
    <!-- <div class="point" /> -->
    <div class="container-flex-row">
      <p ref="greetingText1" id="greetings" class="greetings info-text1" />
      <p ref="greetingText2" id="greetings" class="greetings info-text2" />
      <p ref="greetingText3" id="greetings" class="greetings info-text3" />
      <p ref="greetingText4" id="greetings" class="greetings info-text4" />
    </div>

    <div class="data-container">
      <p ref="dataColumn1" class="data-column" />
      <p ref="dataColumn2" class="data-column" />
      <p ref="dataColumn3" class="data-column" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Navbar from '@/components/nav/Navbar.vue';
// import SvgIcon from "@/components/global/SvgIcon.vue";

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
      renderer: null
    };
  },
  computed: {
    ...mapState({
      texts: state => state.textsModule.landingPageTexts
    })
  },
  mounted() {
    // this.animate();
    this.typeWriter(this.$refs.greetingText1, this.texts.greetings1);
    this.typeWriter(this.$refs.greetingText2, this.texts.greetings2);
    this.typeWriter(this.$refs.greetingText3, this.texts.greetings3);
    this.typeWriter(this.$refs.greetingText4, this.texts.greetings4);

    setTimeout(() => {
      this.typeWriter(this.$refs.dataColumn1, this.texts.dataColumn1, 30);
    }, 200);
    setTimeout(() => {
      this.typeWriter(this.$refs.dataColumn2, this.texts.dataColumn2, 30);
    }, 300);
    setTimeout(() => {
      this.typeWriter(this.$refs.dataColumn3, this.texts.dataColumn3, 30);
    }, 400);

    setTimeout(() => {
      this.letterGlitcher(this.$refs.dataColumn1);
      this.letterGlitcher(this.$refs.dataColumn2);
      this.letterGlitcher(this.$refs.dataColumn3);
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/abstracts/_mixins.scss';

.landing-container {
  overflow: hidden;
  background-color: #000;

  .greetings {
    font-family: 'IBM Plex Mono', monospace;
    font-size: 32px;
    color: #4dd2db;
  }

  .info-text1 {
    animation: glitch 6.1s linear infinite;
  }
  .info-text2 {
    animation: glitch2 1.8s linear infinite;
  }
  .info-text3 {
    animation: glitch3 2.3s linear infinite;
  }
  .info-text4 {
    animation: glitch4 3.5s linear infinite;
  }

  .data-container {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
    @include FlexContainer(center, flex-start, $width: auto);
    flex-flow: row wrap;
    height: 500px;

    .data-column {
      width: 12px;
      margin: 0 4px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 12px;
      color: #4dd2db;
      word-break: break-all;
    }
  }
}

@keyframes glitch {
  1% {
    transform: rotateX(110deg) skewX(90deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
@keyframes glitch2 {
  1% {
    transform: rotateX(56deg) skewX(33deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
@keyframes glitch3 {
  1% {
    transform: rotateX(15deg) skewX(55deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
@keyframes glitch4 {
  1% {
    transform: rotateX(73deg) skewX(75deg);
  }
  2% {
    transform: rotateX(0deg) skewX(0deg);
  }
}
</style>
