<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Navigation></Navigation>
    1111111
    <router-view name="app"></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Home from './pages/Home'

export default {
  name: 'app',
  components: {
    Navigation,
    Home
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

</style>
