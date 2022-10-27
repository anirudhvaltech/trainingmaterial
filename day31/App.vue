<template>
  <div>
    <!-- <h1>{{ title }}</h1> -->
    <h1 v-once>{{ title }}</h1>
    Power:
    <input v-model.number.lazy="power" type="range">
    <br>
    Booster: 
    <input v-model.number.lazy="booster" type="range"> 
    Total Power {{ power+booster }}
    <hr>  
    <textarea v-model.trim="message"></textarea>
    <br>
    <pre>Message: {{ message }}</pre>  
    <button @click="changeTitle">Change title</button>
    <p v-pre>user curley braces to display power eg, {{power}}</p>
  </div>
</template>
 
<script>
export default {
data(){
  return {
    title : "Forms and Data",
    power:0,
    booster:0,
    message: ''
    }
 
  
  },
  methods:{
    changeTitle(){
      this.title="changed";
    }
  }
}

</script>
 
<style>
</style>

