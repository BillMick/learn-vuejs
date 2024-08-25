<template>
  <p :style="{color: count > 5 ? 'red': 'green'}">My counter: {{ count }} .</p>
  <button @click="increment">Increment counter.</button>
  <button @click="decrement">Decrement counter.</button>
  <div v-if="alert">Congrats !! You have clicked more than five times.</div>
</template>

<script setup>
  import {ref} from 'vue'
  const count = ref(0);
  const alert = ref(false);
  const number_of_click = ref(0);
  const increment = function () {
    count.value++;
    number_of_click.value++;
    if (number_of_click.value > 5) {
      alert.value = true;
    }
  }
  const decrement = function () {
    count.value--;
    number_of_click.value++;
    if (number_of_click.value > 5) {
      alert.value = true;
    }
  }
  
  // setInterval(() => {
  //   count.value++
  // }, 1000);

</script>

<style>
  div{
    color: olive;
  }
</style>