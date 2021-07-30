<template>
  <div class="home">
    <p ref="p"> My name is {{ name }}, I am {{ age }} years old.</p>
    <p> My name is {{ reName }}, I am {{ reAge }} years old.</p>
    <button @click="handleClick">Click me!</button>
    <button @click="reAge++">Add to age</button>
    <input type="text" v-model="reName">
    <hr>
    <h3> refs </h3>
    <p> {{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h3> reactive </h3>
    <p> {{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button>
    <hr>
    <input type="text" v-model="search">
    <p> search term - {{ search }}</p>
    <div v-for="type in matchingNames" :key="type">
        <p> {{ type }} </p>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
  name: 'Home',
  setup() {
    // template refs
    // must return element before use
    // used to make variables reactive
    const p = ref(null)

    // data
    let name = 'mario'
    let age = 30
    //reactive variables
    const reName = ref('mario')
    const reAge = ref(30)

    //methods
    const handleClick = function () {
      // reactive vairables with refs
      reName.value = 'luigi'
      reAge.value = 40
      /*
      console.log(p, p.value)
      // use .value to get DOM element
      p.value.classList.add('test')
      p.value.textContent = 'hello, ninjas'
      */

    }

    // using reactive from vue
    const ninjaOne = ref({ name: 'Mario', age: 30})
    const updateNinjaOne = function () {
      ninjaOne.value.age = (ninjaOne.value.age === 30) ? 40 : 30
    }
    // cannot use primative types (string, numbers, etc.) only complex (objects, arrays, etc.)
    // use refs for primative values and other uses
    const ninjaTwo = reactive({ name: 'Luigi', age: 35})
    const updateNinjaTwo = function () {
      ninjaTwo.age = (ninjaTwo.age === 35) ? 45 : 35
    }

    // computed values
    const types = ref(['Mario', 'Luigi', 'Peach', 'Toad', 'Bowser', 'Koopa'])
    const search = ref('')
    const matchingNames = computed(() => {
      return types.value.filter((type) => type.includes(search.value))
    })

    // watch & watch effect
    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })
    const stopEffect = watchEffect(() => { // occurs when setup run or dependency changes
      console.log('watchEffect run', search.value)
    })
    // to stop watching evoke stopWatch or stopEffect as a function

    return {
      name,
      age,
      handleClick,
      p,
      reName,
      reAge,
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      types,
      search,
      matchingNames
    }
  },
}
</script>
