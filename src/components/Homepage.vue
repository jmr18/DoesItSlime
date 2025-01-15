<script setup>
import axios from 'axios';
import { ref } from 'vue';


const search_param = ref("");
const does_it_slime = ref(false);


function search_slimage() {
  axios({
    method: "get",
    url: "/api/slime_random",
  }).then(function(resp) {
    does_it_slime.value = resp.data["result"];
    search_param.value = document.getElementById('search-box').value;
  })
  
  return;
}
</script>

<template>
  <div id="banner">Does It Slime?</div>
  <div id="search-section">
    <span><input type="text" id="search-box"/></span>
    <span><button v-on:click="search_slimage()">Slime</button></span>
  </div>
  <br />
  <div id="result-section" v-if="search_param !== ''">
    <span v-if="does_it_slime"> {{ search_param }} does slime!</span>
    <span v-else> {{ search_param }} does not slime...</span>
  </div>
</template>

<style scoped>

</style>
