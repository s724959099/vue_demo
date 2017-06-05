<template>
  <div id="app">
    <link rel="stylesheet" href="./static/flex_layout.min.css">
    <router-view></router-view>
  </div>
</template>

<script lang="coffee">
  export default {
    name: 'app'
  }
</script>

<style>
  * {
    box-sizing: border-box;
    font-family: Helvetica, Arial,微軟正黑體;
    position: relative;
  }
  html, body {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
  }
  #app{
    height: 100%;
  }


</style>
