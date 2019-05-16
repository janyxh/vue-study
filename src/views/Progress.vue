<template>
    <div class="progress-wrap">
        <div class="progress-bar" :style="`width:${d}%`">
            <div class="progress-bg">

            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      d: 0,
      timing: null
    };
  },
  mounted() {
    this.onStart();
  },
  destroyed() {
    clearInterval(this.timing);
  },
  methods: {
    onStart() {
      this.timing = setInterval(() => {
        if (this.d < 100) {
          this.d += 5;
          console.log(this.d)
        } else {
          this.onEnd();
          // clearInterval(this.timing);
        }
      }, 100);
    },
    onEnd() {
      clearInterval(this.timing);
      this.onAgain();
    },
    onAgain() {
      setTimeout(() => {
        this.d = 0;
        this.onStart();
      }, 3000);
    }
  }
};
</script>

<style lang="scss" scoped>
.progress-wrap {
  width: 800px;
  height: 25px;
  margin: auto;
  background: #cccccc;
  border-radius: 12px;
  .progress-bar {
    overflow: hidden;
    height: 100%;
    //   background: #000;
    border-radius: 12px;
    .progress-bg {
      width: 115%;
      height: 100%;
      background: url('../assets/img/progress-bg.png');
      border-radius: 12px;
      animation: translate 1s linear infinite;
    }
  }
}
@keyframes translate {
  from {
    //   width: 110%;
    transform: translateX(-10%);
  }

  to {
    //   width: 100%;
    transform: translateX(0%);
  }
}
</style>
