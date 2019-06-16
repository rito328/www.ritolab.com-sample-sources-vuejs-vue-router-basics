<template>
  <div class="page2">
    <h1>Page2</h1>
    <p>{{ $route.params.param1 }}</p>
    <p>{{ $route.params.param2 }}</p>
    <p>{{ $route.params.param3 }}</p>
  </div>
</template>

<script>
    export default {
        mounted() {
            console.log(this.$route.params.param1) // eslint-disable-line no-console
            console.log(this.$route.params.param2) // eslint-disable-line no-console
            console.log(this.$route.params.param3) // eslint-disable-line no-console
        }
    }
</script>