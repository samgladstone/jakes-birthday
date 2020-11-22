<template>
    <transition name="count-down">
        <div :key="counter">{{counter}}</div>
    </transition>
</template>

<script>

export default {
  name: 'Countdown',
  data: () => ({
      counter: 5,
      interval: null,
  }),
  methods: {
      decrement() {
          this.counter--;

          if (this.counter === 0) {
            this.$emit('complete');
            clearInterval(this.interval);
          }
      }
  },
  mounted() {
    this.interval = setInterval(() => { this.decrement() }, 1000);
  }
}
</script>

<style scoped>
div {
    font-size: 8em;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.count-down-enter-active {
  transition: all .3s ease;
}
.count-down-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.count-down-enter, .count-down-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  font-size: 0;
  opacity: 0;
}
</style>