<template>    
    <div class="box">
        <h2>Child Component</h2>
        <h3>{{ message }}</h3>
    </div>
</template>
 
<script>
    export default {
        name : "FamChild",
        inject : ['message']
    }
</script>
 
<style>
 
</style>