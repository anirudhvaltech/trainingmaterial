<template>  
    <div>
      <pre>{{ JSON.stringify(users,null,1) }}</pre>
      <button @click="getUsers">Get Data</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
    export default {
     name : "AppUsers",
      data(){
        return {
          users : []
        }
      },
      methods : {
       getUsers(){
          axios.get("https://reqres.in/api/users?page=2")
          .then( res => this.users = res.data.data )
          .catch( err => console.log( err ))
      }
    }
}
</script>
  
<style>
</style>