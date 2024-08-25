<template>
    <p :style="{color: count > 5 ? 'red': 'green'}">My counter: {{ count }} .</p>
    <button @click="increment">Increment counter.</button>
    <button @click="decrement">Decrement counter.</button>
    <div class="alert" v-if="alert">Congrats !! You have clicked more than five times.</div>
    
    <p>My games list: </p>
    <ul>
      <li v-for="movie in movies">{{ movie }} 
        <button @click="delete_movie(movie)">Delete it</button></li>
    </ul>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    const count = ref(0);
    const alert = ref(false);
    const number_of_click = ref(0);
    const movies = ref([
      'Naruto Storm',
      'Devil may cry',
      'Chess'
    ]);
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
    const delete_movie = function (movie) {
      movies.value = movies.value.filter(m => m != movie)
    }
  
  </script>
  
  <style>
    div.alert{
      color: olive;
    };
  </style>