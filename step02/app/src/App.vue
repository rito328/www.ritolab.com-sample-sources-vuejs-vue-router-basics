<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/page1/1">page1</router-link> |
      <router-link to="/page2/2/hoge/20">page2</router-link> |
      <router-link to="/page9999">page9999</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #nav {
    a {
      color: #42b983;
      text-decoration: none;
    }
    .router-link-exact-active {
      color: #00252b;
    }
  }
</style>