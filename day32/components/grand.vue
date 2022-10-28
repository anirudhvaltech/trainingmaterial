 
<template>    
    <div class="box">
        <h2>Grand Parent Component</h2>
        <FamParent/>
    </div>
</template>
 
<script>
    import FamParent from "./parent.vue"
    export default {
        name : "FamGrand",
        components: { 
          FamParent
        },
        provide : {
            message : 'hello family'
        }
    }
</script>
 
<style>
   .box{
    border:  2px solid rgb(221, 71, 71);
    padding: 10px;
    margin: 10px;
    text-align: left;
    max-width: 600px;
   }
</style>
 