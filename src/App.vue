<template>
  <div id="app">
    <Header/>
    <Lbg/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'
import Lbg from './components/Lbg'

export default {
  name: 'App',
  components:{
    Header,
    Lbg
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
