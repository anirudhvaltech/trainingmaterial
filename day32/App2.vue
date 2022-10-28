<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>Power is: {{ power }}</h2>
    <button @click="power++">Increase Power</button>
    <h3>{{ message }}</h3>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Welcome to Vue Training",
      power: 0,
      message: "Hero is not ready to fight",
    };
  },
  
  watch:{
    power:{
      handler(npower){
        if(npower>4){
          this.message="Hero is ready to fight"
        }
        else if(npower>10){
          npower=10
          return npower
        }
      }
    }
      
  }
};
</script>
