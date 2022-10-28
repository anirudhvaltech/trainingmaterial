<template>    
    <div class="box">
        <h2>Parent Component</h2>
        <FamChild/>
    </div>
</template>
 
<script>
    import FamChild from "./child.vue";
    export default {
        name : "FamParent",
        
        components: { 
          FamChild
        }
    }
</script>
<style>
 
</style>