<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    name: 'app'
  }
</script>

<style>
 *{padding: 0;margin:0;box-sizing: border-box;-webkit-margin-before:0;-webkit-margin-after:0;}
  html, body {
    position: relative;
    font-size: 20px;
    color: #959595;
    width: 100%;
    height: 100%;
    background: #ececec;
  }
  body{
    overflow-y: scroll !important;
    padding: 0 !important;
  }
  body::-webkit-scrollbar {
    width: 8px;
  }
  body::-webkit-scrollbar-track {
    background-color: #fff;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
  }
  body::-webkit-scrollbar-thumb {
    background-color: #c3c3c3;
    -webkit-border-radius: 2em;
    -moz-border-radius: 2em;
    border-radius:2em;
  }
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
  }
</style>
