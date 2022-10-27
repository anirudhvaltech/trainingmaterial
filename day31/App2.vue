<template>
  <div>
    <h1>{{project.apptitle}}</h1>
    <ul>
      <li v-for="(hname, key) in avengers" v-bind:key="key">{{ (key+1)+" "+hname }}</li>
    </ul>
    <div v-for="(name, key) in project" v-bind:key="key">{{key.toUpperCase()}}:{{name}}
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">firstname</th>
      <th scope="col">lastname</th>
      <th scope="col">movies</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="({title,firstname,lastname,movies}, index) in ladyAvengers" v-bind:key="index">
      <th scope="row">{{title}}</th>
      <td>{{firstname}}</td>
      <td>{{lastname}}</td>
      <td><pl>
        <li v-for="({title, year}, index) in movies" :key="index"> {{ title }} | Release Year {{ year }}</li>
      </pl></td>
    </tr>
  </tbody>
  </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      avengers: ['Black Widow', 'Scarlet Witch', 'Shuri', 'Wasp', 'Captain Marvel', 'Gamora'],
        names: [
          { title: 'Wasp', firstname: "Janet", lastname: 'Van Dyne' },
          { title: 'Scarlet Witch', firstname: "Wanda", lastname: 'Maximoff' },
          { title: 'Black Widow', firstname: "Natasha", lastname: 'Romanoff' },
          { title: 'Captain Marvel', firstname: "Carol", lastname: 'Danvers' },
        ],
        project : {
          apptitle : "Avengers App",
          author : "Vijay",
          version : 101,
          year  :2022
        },
        ladyAvengers: [
          {
            "title": "Wasp",
            "firstname": "Janet",
            "lastname": "Van Dyne",
            "movies": [
              { "title": "Ant-Man", "year": 2015 },
              { "title": "Ant‑Man and the Wasp", "year": 2018 },
              { "title": "Avengers: Endgame", "year": 2019 }
            ]
          },
          {
            "title": "Scarlet Witch",
            "firstname": "Wanda",
            "lastname": "Maximoff",
            "movies": [
              { "title": "Captain America: The Winter Soldier", "year": 2014 },
              { "title": "Avengers: Age of Ultron", "year": 2015 },
              { "title": "Captain America: Civil War", "year": 2016 },
              { "title": "Avengers: Infinity War", "year": 2018 },
              { "title": "Avengers: Endgame", "year": 2019 },
              { "title": "Doctor Strange in the Multiverse of Madness", "year": 2022 }
            ]
          },
          {
            "title": "Black Widow",
            "firstname": "Natasha",
            "lastname": "Romanoff",
            "movies": [
              { "title": "Iron Man 2", "year": 2010 },
              { "title": "Avengers", "year": 2012 },
              { "title": "Captain America: The Winter Soldier", "year": 2014 },
              { "title": "Avengers: Age of Ultron", "year": 2015 },
              { "title": "Captain America: Civil War", "year": 2016 },
              { "title": "Avengers: Infinity War", "year": 2018 },
              { "title": "Avengers: Endgame", "year": 2019 }
            ]
          },
          {
            "title": "Captain Marvel",
            "firstname": "Carol",
            "lastname": "Danvers",
            "movies": [
              { "title": "Captain Marvel", "year": 2019 },
              { "title": "Avengers: Endgame", "year": 2019 }
            ]
          },
          {
            "title": "Gamora",
            "firstname": "",
            "lastname": "",
            "movies": [
              { "title": "Guardians of the Galaxy", "year": 2014 },
              { "title": "Guardians of the Galaxy Vol. 2", "year": 2017 },
              { "title": "Avengers: Infinity War", "year": 2018 },
              { "title": "Avengers: Endgame", "year": 2019 }
            ]
          },
          {
            "title": "Shuri",
            "firstname": "",
            "lastname": "",
            "movies": [
              { "title": "Black Panther", "year": 2018 },
              { "title": "Avengers: Infinity War", "year": 2018 },
              { "title": "Avengers: Endgame", "year": 2019 },
              { "title": "Black Panther: Wakanda Forever", "year": 2022 }
            ]
          }
]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >


</style>

