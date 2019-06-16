<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/page1">Page1</router-link> |
      <router-link to="/page2">Page2</router-link> |
      <router-link to="/page3">Page3</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
      methods : {
          setMeta (to) {
              if(to.meta.title){
                  document.title = to.meta.title;
              }
              if(to.meta.desc){
                  document.querySelector("meta[name='description']").setAttribute('content', to.meta.desc)
              }
          }
      },
      watch: {
          '$route' (to) {
              this.setMeta(to);
          }
      }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
