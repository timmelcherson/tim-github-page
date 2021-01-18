<template>
  <inline-svg
    :src="require(`@/assets/icons/${iconUrl}`)"
    :class="{ 'hidden-initially': !disableAnimation }"
    @loaded="loadSvgHandler((svg = $event))"
    @error="console.log($event)"
  />
</template>

<script>
export default {
  props: {
    iconUrl: {
      type: String,
      default: ''
    },
    disableAnimation: {
      type: Boolean,
      default: false
    },
    strokeAnimDuration: {
      type: Number,
      default: 500
    },
    strokeAnimDelay: {
      type: Number,
      default: 0
    },
    shouldFadeFill: {
      type: Boolean,
      default: false
    },
    fillOpacityAnimDuration: {
      type: String,
      default: '0.5s'
    },
    fillOpacityAnimDelay: {
      type: String,
      default: '0s'
    },
    strokeAnimationType: {
      type: String,
      default: 'linear'
    },
    fillAnimationType: {
      type: String,
      default: 'linear'
    },
    dashOverlayColor: {
      type: String,
      default: 'none'
    }
    // iconUrl: {
    //   type: String,
    //   default: ''
    // },
  },
  methods: {
    loadSvgHandler(svg) {
      if (!this.disableAnimation) this.drawSvg(svg);
    },
    drawSvg(
      svg,
      strokeDuration = this.strokeAnimDuration,
      strokeDelay = this.strokeAnimDelay,
      shouldFill = this.shouldFadeFill,
      dashOverlayColor = this.dashOverlayColor,
    ) {
      svg.children.forEach(async element => {
        // console.log('drawing start');
        await this.drawSvgPath(
          element,
          strokeDuration,
          this.strokeAnimationType,
          strokeDelay,
          dashOverlayColor
        );
        this.$emit('animationFinished');
      });

      if (shouldFill) {
        this.fillSvg(svg);
      }
    },
    fillSvg(
      svg,
      fillDuration = this.fillOpacityAnimDuration,
      fillDelay = this.fillOpacityAnimDelay
    ) {
      const delay = (parseFloat(fillDuration) + parseFloat(fillDelay)) * 1000;

      setTimeout(() => {
        svg.children.forEach(element => {
          this.fadeInSvgFill(
            element,
            fillDuration,
            this.fillAnimationType,
            fillDelay
          );
        });
      }, delay);
    }
  }
};
</script>

<style lang="scss" scoped>
#landing-page-ff-logo {
  position: relative;
  z-index: 5;
  margin: 3px 20px 0 20px;
  height: 100%;
}
.hidden-initially {
  visibility: hidden;
}
</style>
