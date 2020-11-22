<template>
  <div id="app">
    <div id="wrapper">
      <Birthday v-if="isBirthday" />
      <NotBirthday v-else @change-to-birthday="isBirthday = true" />
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import Birthday from './sections/birthday/Birthday.vue'
import NotBirthday from './sections/not-birthday/NotBirthday.vue'
import { JAKES_BDAY_DAY_OF_YEAR } from './constants';



export default {
  name: 'App',
  components: {
    Birthday,
    NotBirthday
  },
  data: () => ({
    isBirthday: window.location.search == '?f=t' || dayjs().dayOfYear() === JAKES_BDAY_DAY_OF_YEAR
  })
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
