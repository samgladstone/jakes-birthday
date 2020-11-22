<template>
    <div>
        <p>Dear Jake,</p>
        <p>As you're probably aware, it's not your birthday yet.</p>
        <p>You still need to wait another:</p>
        <div class="counter">
            <span>{{days}} Day{{plural(days)}}, </span>
            <span>{{hours}} Hour{{plural(hours)}}, </span>
            <span>{{minutes}} Minute{{plural(minutes)}}, </span>
            <span>{{seconds}} Second{{plural(seconds)}}</span>
        </div>
        <p>A little more patience is necessary...</p>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import { JAKES_BDAY_DAY_OF_YEAR } from '../../constants';

export default {
  name: 'NotBirthday',
  data: () => ({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
  }),
    methods: {
        plural(val) {
            return val === 1 ? '' : 's'
        },
        recalculateDay() {
            const now = dayjs();
            const dayOfYear = now.dayOfYear();
            const isToday = dayOfYear === JAKES_BDAY_DAY_OF_YEAR;
            if (isToday)
                this.$emit('change-to-birthday');

            this.days = dayOfYear > JAKES_BDAY_DAY_OF_YEAR
                ? 365 - dayOfYear + JAKES_BDAY_DAY_OF_YEAR
                : JAKES_BDAY_DAY_OF_YEAR - dayOfYear - 1;
                
            this.hours = isToday
                ? 0
                : 24 - now.hour() - 1;
                
            this.minutes = isToday
                ? 0
                : 60 - now.minute() - 1;
                
            this.seconds = isToday
                ? 0
                : 60 - now.second() - 1;
        }
    },
    created() {
        this.recalculateDay();

        setInterval(() => this.recalculateDay(), 1000)
    }
}
</script>

<style scoped>
    .counter {
        font-size: 1.4em;
    }
</style>