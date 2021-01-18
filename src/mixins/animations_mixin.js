import Vue from 'vue';

Vue.mixin({
  methods: {
    typeWriter(element, text, ANIM_SPEED = 120) {
      let counter = 0;
      let writer = setInterval(() => {
        element.innerHTML += text.charAt(counter);
        counter++;
        if (counter >= text.length) {
          clearInterval(writer);
        }
      }, ANIM_SPEED);
    },
    letterGlitcher(element, ANIM_FREQ = 150) {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const length = element.innerHTML.length;
      let str = element.innerText;

      setInterval(() => {
        let randomIndex = Math.floor(Math.random() * length);
        let randomChar = characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        str = `${str.substring(0, randomIndex)}${randomChar}${str.substring(
          randomIndex + 1
        )}`;
        element.innerText = str;
      }, ANIM_FREQ);
    },
    drawSvgPath(element, duration, animationType = 'linear', delay = 0, dashOverlayColor = "none") {
      if (element.nodeName !== 'path') {
        return;
      } else {
        let ANIM_TIME_MS = duration + delay;
        const length = element.getTotalLength();
        element.style.visibility = 'visible';
        element.style.transition = element.style.WebkitTransition = 'none';

        
        if ('stroke-dasharray' in element.attributes) {
          element.style.stroke = dashOverlayColor;
        } else {
          // window.getComputedStyle(document.querySelector('project-section-container'), null).getPropertyValue('background-color');
        //   console.log(element.attributes);
        // }
        // if ('stroke-dasharray' in element.attributes) {
        //   // element.style.strokeDasharray = element.attributes.strokeDasharray;
        //   console.log(element.attributes);
        //   element.style.opacity = "0";
        //   element.style.transition = element.style.WebkitTransition = `opacity ${duration}ms ${animationType}`;
        //   // element.style.opacity = "1";
        //   // const dashLength = element.attributes['stroke-dasharray'].value.charAt(0)
        //   // const dashOffset = element.attributes['stroke-dasharray'].value.charAt(2)
        //   // element.style.strokeDasharray = `${0} ${length*2}`;
        //   // element.style.strokeDashoffset = length;

        //   // element.getBoundingClientRect();

        //   // element.style.transition = element.style.WebkitTransition = `stroke-dasharray ${duration}ms ${animationType} ${delay}ms`;

        //   // element.style.strokeDasharray = `${dashLength} ${dashOffset}`;
        //   // element.style.strokeDashoffset = length;
        //   // element.style.strokeDashoffset = dashOffset;
        // } else {
          element.style.strokeDasharray = `${length} ${length}`;
          element.style.strokeDashoffset = length;

          element.getBoundingClientRect();

          element.style.transition = element.style.WebkitTransition = `stroke-dashoffset ${duration}ms ${animationType} ${delay}ms`;

          element.style.strokeDashoffset = '0';
        }

        if ('fill' in element.attributes) {
          console.log(element.attributes.fill);
          element.style.transition = element.style.WebkitTransition = `fill-opacity 300ms ${animationType} ${ANIM_TIME_MS}ms`;
          element.style.fillOpacity = 1;
        }

        // console.log(`drawSvgPath with duration: ${ANIM_TIME_MS}ms`);

        return new Promise(resolve => {
          setTimeout(() => {
            resolve('finished animation');
          }, ANIM_TIME_MS);
        });
      }
    },
    fadeInSvgFill(svg, duration, transitionType, delay) {
      svg.style.transition = svg.style.WebkitTransition = 'none';
      svg.style.transition = `fill-opacity ${duration} ${transitionType} ${delay}`;
      svg.style.fillOpacity = 1;
    }
  }
});
