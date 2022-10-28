<template>
  <div>
    <!-- step 1 start -->
   <!--  
    <AppHero></AppHero>
    <AppHero>
      Hello Hero Component from Parent
    </AppHero>
    <AppHero>
      <button>click Me</button>
    </AppHero> 
   -->
    <!-- step 1 end -->
    <AppHero>
      <button>Click Me</button>
      <template v-slot:footer>
        <h5>Footer Area Content</h5>
      </template>
      <template v-slot:header>
          <h3>Header Area Content</h3>
        </template>
        <h4>Body Area Content</h4>
    </AppHero>
  </div>
</template>
 
<script>
import AppHero from "./components/hero.vue";
  export default {
    data(){
      return {
        title : "Welcome to VUE Training",
      }
    },
    components: { AppHero }
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