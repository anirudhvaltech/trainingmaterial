<template>
  <div>
    <h1>{{ title }}</h1>
    <pre>{{ JSON.stringify(heroinfo, null, 1) }}</pre>
    <form>
        <div class="mb-3">
            <label for="htitle" class="form-label">Hero Title</label>
            <input v-model="heroinfo.title" type="text" class="form-control" id="htitle">
        </div>
        <div class="mb-3">
            <label for="hfname" class="form-label">First Name</label>
            <input v-model="heroinfo.firstname" type="text" class="form-control" id="hfname">
        </div>
        <div class="mb-3">
            <label for="hlname" class="form-label">Last Name</label>
            <input v-model="heroinfo.lastname" type="text" class="form-control" id="hlname">
        </div>
        <div class="mb-3">
            <label for="hcity" class="form-label">City</label>
            <input v-model="heroinfo.city" type="text" class="form-control" id="hcity">
        </div>
        <div class="mb-3">
            <label for="hpower" class="form-label">Power</label>
            <input v-model="heroinfo.power" type="number" class="form-control" id="hpower">
        </div>
        <div class="mb-3">
            <label for="hgender" class="form-label">Gender: &nbsp;</label>
            <input value="male" name="gen" v-model="heroinfo.gender" type="radio" id="hgender"/>Male &nbsp;
            <input value="female" name="gen" v-model="heroinfo.gender" type="radio" id="hgender"/>Female
        </div>
        <div class="mb-3">
            <label for="hcf" class="form-label">Can fly: &nbsp;</label>
            <input true-value="can fly" false-value="can't fly" v-model="heroinfo.canfly" type="checkbox" id="hcf">
        </div>
        <div class="mb-3">
          <label for="htype" class="form-label">Type &nbsp;</label>
            <select v-model="heroinfo.type">
              <option value="" selected>Select Hero</option>
              <option value="avenger" selected>Avengers</option>
              <option value="justice_league" selected>Justice League</option>
              <option value="indic_hero" selected>Indic Hero</option>
            </select>
        </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>
 
<script>
export default {
data(){
  return {
    title : "Forms and Data",
    heroinfo : {
      title : '',
      firstname : '',
      lastname : '',
      city : '',
      power : 0,
      type : '',
      gender:'',
      canfly: ''
    },
 
  }
}
}
</script>
 
<style>
</style>

