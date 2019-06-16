<template>
  <div class="page1">
    <h1>Page1</h1>
    <p>{{ $route.params.param1 }}</p>
  </div>
</template>


<script>
  export default {
      mounted() {
          console.log(this.$route.params.param1) // eslint-disable-line no-console
      }
  }
</script>