<template>
  <div id="app">
    <NavPage />
    <router-view></router-view>
    <FooterPage />
  </div>
</template>

<script>

import NavPage from './components/NavPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    NavPage,
    FooterPage,
  },
}
</script>

<style lang="scss">
.ar{
    flex-direction: row-reverse;
    text-align: right;
    
    h1, ul, p{
      text-align: right;
    }
}
.en{
    flex-direction: row;
    text-align: left;
}
</style>