<template>
  <h1> {{ title }} </h1>
  <p> Welcome! </p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href=""> Sign up NOW </a><br>
        <a href=""> More info </a>
      </template>
      <h1> {{ header }} </h1>
      <p> {{ text }} </p>
    </Modal>
  </teleport>
  <div v-if="showModal2">
    <Modal @close="toggleModal2">
      <template v-slot:items>
        <p> Pants! </p>
        <p> Hoodies! </p>
      </template>
      <h1> Clothing for Sale! </h1>
      <p> Look at these things! </p>
    </Modal>
  </div>
  <button @click.alt="toggleModal" @click.shift="toggleModal2"> Modal1: alt, Modal2: shift </button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My First Vue App :)',
      header: "Sign up for the Giveaway!",
      text: "Grab your ninja swag for half price!",
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
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
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 3px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
