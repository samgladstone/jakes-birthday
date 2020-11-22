<template>
  <div id="coin-canvas" @click="$emit('close')">
    <img src="coin.png" />
    <div id="coin-interact" 
         class="csr-active"
         v-tooltip.bottom="{ content: interactTitle, offset: 30, delay: 0 }"
         @click.prevent="$emit('interact')"></div>
    <div id="coin-examine" 
         class="csr-active"
         v-tooltip.bottom="{ content: examineTitle, offset: 30, delay: 0 }"
         @click.prevent="$emit('examine')"></div>
    <div id="coin-speak" 
         class="csr-active"
          v-tooltip.bottom="{ content: speakTitle, offset: 30, delay: 0 }"
         @click.prevent="$emit('speak')"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    examineVerb: {
      type: String,
      default: 'Examine',
    },
    interactVerb: {
      type: String,
      default: 'Press',
    },
    objectName: {
      type: String,
      required: true,
    },
    speakVerb: {
      type: String,
      default: 'Talk to',
    },
  },
  computed: {
    examineTitle() { return `${this.examineVerb} "${this.objectName}"` },
    interactTitle() { return `${this.interactVerb} "${this.objectName}"` },
    speakTitle() { return `${this.speakVerb} "${this.objectName}"` },
  },
}
</script>

<style scoped>
  #coin-canvas {
    width: 423px;
    height: 421px;
    position: relative;
  }

  #coin-interact {
    position: absolute;
    top: 142px;
    left: 41px;
    width: 102px;
    height: 125px;
  }

  #coin-examine {
    position: absolute;
    top: 142px;
    left: 146px;
    width: 124px;
    height: 125px;    
  }

  #coin-speak {
    position: absolute;
    top: 142px;
    left: 272px;
    width: 122px;
    height: 125px;    
  }
</style>