<template>
    <Countdown v-if="countDown" 
               @complete="countdownComplete()"/>
    <div v-else>
        <p>Dear Jake,</p>
        <p>Wishing you a very <br/> HAPPY BIRTHDAY!</p>
        <button class="blue shake csr-active"
                :disabled="pressed"
                @click="showCoin = true">Let's Go!</button>
        <CoinWrapper object-name="Button"
                     :visible="showCoin"
                     speak-verb="Eat"
                     @close="close()" 
                     @interact="press()"
                     @examine="examine()"
                     @speak="eat()" />
    </div>
</template>

<script>
    import CoinWrapper from '../../components/CoinWrapper'
    import Countdown from './Countdown'

    let eatBtnSound;
    let examineBtnSound;
    let examineBtnSound2;
    let interactBtnSound;

    const playSound = sound => {
        sound.currentTime = 0;
        sound.play();
    }

export default {
  name: 'Birthday',
  components: {
      CoinWrapper,
      Countdown
  },
  props: {
    msg: String
  },
  data: () => ({
      showCoin: false,
      hasExamined: false,
      pressed: false,
      countDown: false
  }),
  methods: {
      close() {
          setTimeout(() => {this.showCoin = false}, 250);
      },
      countdownComplete() {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=true&mute=0";
      },
      eat() {
        playSound(eatBtnSound);
      },
      examine() {
        playSound(
            this.hasExamined
            ? examineBtnSound2
            : examineBtnSound
        );

        this.hasExamined = true;
      },
      press() {
          playSound(interactBtnSound);
          this.pressed = true;
          setTimeout(() => { this.countDown = true; }, 4000)
      }
  },
  created() {
      eatBtnSound = document.getElementById('eat-btn');
      examineBtnSound = document.getElementById('examine-btn');
      examineBtnSound2 = document.getElementById('examine-btn-2');
      interactBtnSound = document.getElementById('interact-btn');
  }
}
</script>

<style scoped>
button {
    display:inline-block;
    padding:0.3em 1.2em;
    margin:0 0.1em 0.1em 0;
    border:0.16em solid rgba(255,255,255,0);
    border-radius:2em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color:#FFFFFF;
    text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
    text-align:center;
    transition: all 0.2s;
}

button.blue {
    background-color:#4e9af1;
}

.shake {
  animation: shake 4s cubic-bezier(.36,.07,.19,.97) both;
  animation-iteration-count: infinite;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  2.5%, 22.5% {
    transform: translate3d(-1px, 0, 0);
  }
  
  5%, 20% {
    transform: translate3d(2px, 0, 0);
  }

  7.5%, 12.5%, 17.5% {
    transform: translate3d(-4px, 0, 0);
  }

  10%, 15% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>