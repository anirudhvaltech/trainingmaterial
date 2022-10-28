<template>
    <div>
<!--       
    <h2>Hero Component</h2> -->
      <!-- default use
        <slot></slot> 
      -->
      <!-- while using named slots you can use one default slot without a name -->
      <slot name="header"></slot>
      <hr>
      <slot></slot>
      <hr>
      <slot name="footer"></slot>
    </div>
  </template>
  
  <script>
    export default {
     name : "AppHero",
      data(){
        return {
          title : "Welcome to VUE Training",
        }
      },
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
  
 