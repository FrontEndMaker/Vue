<template>
  <div id="app">
    <HelloWorld></HelloWorld>
    <Footer></Footer>
    <router-view/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import HelloWorld from './components/HelloWorld'

export default {
  name: 'app',
  components: {
    Footer, HelloWorld
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
