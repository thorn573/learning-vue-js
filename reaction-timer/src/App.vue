<template>
  <h1> Ninja Reaction Timer </h1>
  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results v-if="showResults" :score="score" />
</template>

<script>
import Block from './components/Block.vue'
import Results from './components/Results.vue'

export default {
  name: 'App',
  components: {
    Block,
    Results
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    }
  },
  methods: {
    start() {
      this.delay = 1000 + (Math.random() * 3000)
      this.isPlaying = true
      this.showResults = false
    },
    endGame(timeData) {
      this.score = timeData
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
  }

  button {
    border: none;
    border-radius: 4px;
    background: #0faf87;
    padding: 8px 16px;
    font-weight: bold;
    font-size: 16px;
    color: white;
    cursor: pointer;
    letter-spacing: 1px;
  }

  button:disabled {
    opacity: 0.2;
    cursor: not-allowed;
  }

</style>
