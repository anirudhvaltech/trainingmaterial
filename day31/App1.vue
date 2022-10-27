<template>
  <div>
    <h1>{{title}}</h1>
    <input min="0" max="10" type="number" v-model="power">
    <h2 v-if="power === 5">Power is 5</h2>
    <h2 v-else>Power is not 5</h2>
    <input type="checkbox" v-model="show">
    <div>
      <template v-if="show">
        <h2>Company policy</h2>
        <fieldset >
          <legend>
            Terms and conditions
          </legend>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique facere qui laboriosam aliquid provident praesentium doloribus iste exercitationem unde? Quisquam esse sed doloremque quos. Esse temporibus cumque neque quam eveniet.
          </p>
        </fieldset>
      </template>
      <h2 v-if="show">Content shown using if</h2>
      <h2 v-show="show">Content shown using if</h2>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return {
      title: 'Welcome to your life',
      power: 4,
      show: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
