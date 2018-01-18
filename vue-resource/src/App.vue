<template>
  <div id="app">
    <user></user>
  </div>
  
</template>

<script>

import About from './components/about'
import User from './components/user'

export default {
  name: 'app',
  data: function() {
    return {
      message: "Hello"
    }
  },
  components: {
    About, User
  }
}
</script>

<style>
.test {
  color: red
}
</style>
