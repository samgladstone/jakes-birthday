<template>
    <div>{{counter}}</div>
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
</style>