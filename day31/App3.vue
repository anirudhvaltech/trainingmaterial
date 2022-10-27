<template>
  <div>
    <h1>{{title}}</h1>
    <!-- <button v-on:click="myFun()"> -->
    <button @click="myFun()">
      Click Me
    </button>
    <h2>Power : {{power}}</h2>
    <button @click="power++">
      increasePower
    </button>
    <button @click="power--">
      decreasePower
    </button>
    <hr/>
    <button @click="increasePower">
      increasePower
    </button>
    <button @click="decreasePower">
      decreasePower
    </button>
    <hr>
    Power is <input @input="setPower($event)" type="range"/>
  </div>
</template>

<script>
export default{
  data(){
    return {
      title: "methods events computed",
      power: 0
    }
  },
  methods:{
    myFun:()=>{
      alert("Hello There")
    },
    increasePower(){
      this.power++
    },
    // increasePower:()=>{
    //   this.power++
    // },
    //arrow function wont work as the context is set outside, this.power cannot be found. Vue implicitly has arrow functions, so these get nested
    decreasePower(){
      this.power--
    },
    setPower(evt){
      this.power=evt.target.value
    }
  }
} 
</script>

<style >
</style>
