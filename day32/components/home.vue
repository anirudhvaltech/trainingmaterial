 
<template>
  <div>
      <h3>{{ title }}</h3>
      <h4>Power : {{ power + booster }}</h4>
      <img width="200" :src="photo" :alt="title">
      <textarea cols="30" rows="10" v-text="details"></textarea>
  </div>
</template>

<script>
  export default {
    name : "AppHero",
    // props with types
   data(){
      return {
          booster : 1
      }
  },
    props : {
      title : String,
      power : Number,
      photo : String,
      details : String
    }
    ,
    components: { }
  }
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

