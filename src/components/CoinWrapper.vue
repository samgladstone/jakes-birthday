<template>
    <div v-if="visible"
         id="coin-wrapper-outer"
         @click="$emit('close')">
        <div id="coin-wrapper-inner">
            <Coin :examine-verb="examineVerb"
                  :interact-verb="interactVerb"
                  :object-name="objectName"
                  :speak-verb="speakVerb"
                  @close="$emit('close')" 
                  @interact="$emit('interact')"
                  @examine="$emit('examine')"
                  @speak="$emit('speak')"
                />
        </div>
    </div>
</template>

<script>
    import Coin from './Coin'

export default {
  name: 'CoinWrapper',
  components: {
      Coin
  },
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
    visible: {
        type: Boolean,
        required: true,
    }
  },
}
</script>

<style scoped>
#coin-wrapper-outer {
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
}

#coin-wrapper-inner {
    position: absolute;
    top: calc(50vh - 210px);
    left: calc(50vw - 210px);
}
</style>