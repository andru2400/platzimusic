<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>PlatziMusic</h1>

    <select v-model="selectedCountry">
      <option v-for="country in countries" :value="country.value" v-bind:key="country.value" v-text="country.name"></option>
    </select>

    <spinner v-show="loading"></spinner>

    <ul class="d-inline-block">
      <artist v-for="artist in artists" v-bind:key="artist.name" v-bind:artist="artist"></artist>
    </ul>

  </div>
</template>

<script>

import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries:[
        { name : 'Argentina', value: 'argentina' },
        { name : 'Colombia', value: 'colombia' },
        { name : 'Chile', value: 'chile' },
        { name : 'Venezuela', value: 'venezuela' },
        
      ],
      selectedCountry : 'argentina',
      loading:true
    }
  },
  components: {
    Artist,
    Spinner
  },
  mounted: function(){
     this.refreshArtists()
  },
  methods: {
    refreshArtists(){
      const self = this
      this.artists = []
      this.loading = true
      getArtists(this.selectedCountry)
        .then(function (artists){
          self.loading = false
          self.artists = artists
        })
    }
  },
  watch: {
    selectedCountry(){
      this.refreshArtists()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
