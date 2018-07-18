<template>
  <div class="hello"><!-- html注释-->
    <div class="grid-area-zero">
    <button @click="turn" title="hello world">{{msg}}</button>
    <br>
    </div>
    <br>
    <div class="grid-area-a">
    <a href="http://localhost:8080/#/class3">class3</a><br>
    <a href="http://localhost:8080/#/class4">class4</a><br>
    <a href="http://localhost:8080/#/class5">class5</a><br>
    </div>
    <div class="grid-area-b">
    <a href="http://localhost:8080/#/class6">class6</a><br>
    <a href="http://localhost:8080/#/class7">class7</a><br>
    </div>
    <div class="grid-area-c">
    <a href="http://localhost:8080/#/class8">class8</a><br>
    <a href="http://localhost:8080/#/class9">class9</a><br>
    </div>
    <div class="grid-area-d">
    <a href="http://localhost:8080/#/class10">class10</a><br>
    <a href="http://localhost:8080/#/class11">class11</a><br>
    <a href="http://localhost:8080/#/class12">class12</a><br>
    </div>
  </div>
</template>

<script>
  /* javascript zhushi*/
export default {
  data () {
    return {
      msg: 'hello world'
    }
  },
  methods: {
    turn () {
      alert('myproject activated')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*  css zhushi */
  /* css grid 布局 learned from http://cssgridgarden.com/*/
  a {
    color: antiquewhite;
    length: 100px;
    width: 100px;
  }
  .hello {
    display: grid;
    grid-template:repeat(3, 1fr) / repeat(5, 1fr);/* rows/columns*/
    grid-gap:20px;
  }
  .grid-area-zero {
    grid-area: 1/3/2/4; /*  grid-area:grid-row-start, grid-column-start, grid-row-end, followed by grid-column-end*/
    background:blueviolet;
    outline: 3px solid black;
  }
  .grid-area-a {
    grid-row: 2/3;
    grid-column: 2/3;
    background:darkred;
    outline: 3px solid black;
  }
  .grid-area-b {
    grid-row: 3/4;
    grid-column: 2/3;
    background: darkseagreen;
    outline: 3px solid black;
  }
  .grid-area-c {
      grid-row: 2/3;
      grid-column: 4/5;
      background:hotpink;
    outline: 3px solid black;
    }
  .grid-area-d {
    grid-row: 3/4;
    grid-column: 4/5;
    background:darkolivegreen;
    outline: 3px solid;
  }
  button {
    background:lightblue;
  }
</style>
