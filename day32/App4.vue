<template>
  <div>
    <AppHero details="details about batman comes here " title="Batman" :power="7" photo="http://tooncrush.com/valtech/batman.jpg" />
    <AppHero details="details about batman comes here " title="Batman" :power="7" photo="http://tooncrush.com/valtech/batman.jpg" />
    <img :src="herophto" >
  </div>
</template>
<script>
import AppHero from "./components/home.vue";
 
export default{
  data(){
    return {
      power : 0,
      appversion : 10,
      herophto :  require('./assets/logo.png')
    }
  },
  components :{
    AppHero
  }
}
</script>
<style></style>