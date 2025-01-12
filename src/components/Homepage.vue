<script setup>
import axios from 'axios';
import { ref } from 'vue';


const search_param = ref("");
const does_it_slime = ref(false);


function search_slimage() {
  this.search_param = document.getElementById('search-box').value;
  axios({
    method: "get",
    url: "/api/get_slime",
    params: {
      search_param: this.search_param
    }
  }).then(function(resp) {
    console.log(resp.data);
    //this.does_it_slime = resp.data;
  })
  
  return;
}
</script>

<template>
  <h2>Test page for DoesItSlime.</h2>
  <div>
    <span><input type="text" id="search-box"/></span>
    <span><button v-on:click="search_slimage()">Slime?</button></span>
  </div>
  <div v-if="search_param !== ''">
    <span v-if="does_it_slime"> {{ search_param }} does slime!</span>
    <span v-else> {{ search_param }} does not slime...</span>
  </div>
</template>

<style scoped>

</style>
