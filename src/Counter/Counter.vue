<template>
    <p :style="{color: count > 5 ? 'red': 'green'}">My counter: {{ count }} .</p>
    <button @click="increment">Increment counter.</button>
    <button @click="decrement">Decrement counter.</button>
    <div class="alert" v-if="alert">Congrats !! You have clicked more than five times.</div>
    
    <p>My games list: </p>
    <ul>
      <li v-for="game in games" :key="game">{{ game }} 
        <button @click="delete_movie(game)">Delete it</button></li>
    </ul>
    <form action="" @submit.prevent="add_game">
      <input type="text" placeholder="Add a game" v-model="new_game">
      <button type="submit"> Add game</button>
    </form>
  </template>
  
  <script setup>
    import {ref} from 'vue'
    const count = ref(0);
    const alert = ref(false);
    const number_of_click = ref(0);
    const games = ref([
      'Naruto Storm',
      'Devil may cry',
      'Chess'
    ]);
    const new_game = ref('');
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
    const delete_movie = function (game) {
      games.value = games.value.filter(m => m != game)
    }
    const add_game = function () {
      if (new_game.value != '') {
        games.value.push(new_game.value);
        new_game.value = '';
      }
    }
  
  </script>
  
  <style>
    div.alert{
      color: olive;
    };
  </style>