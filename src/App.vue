<template>
  <div id="app">
    <router-link to="/first" tag="button">first</router-link> 
    <router-link to="/second" tag="button">second</router-link> 
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    
  },
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
