<template>
  <div>
    <Home/>
  </div>
</template>
<script>
  import Home from "./components/home.vue";
  export default{
    data(){
      return {
        power: 0
      }
    },
    components: {
      Home
    }
  }
</script>
<style></style>