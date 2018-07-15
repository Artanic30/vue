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
  a {
    color: antiquewhite;
    length: 100px;
    width: 100px;
  }
  .hello {
    display: grid;
    grid-template-rows: repeat(3, 33.3%);
    grid-template-columns: repeat(2, 50%) ;
    grid-auto-rows: min-content;
  }
  .grid-area-zero {
    grid-row: 1;
    grid-column: 1 / span 2;
    background:blueviolet;
  }
  .grid-area-a {
    grid-row: 2;
    grid-column: 1;
    background:darkred;
  }
  .grid-area-b {
    grid-row: 3;
    grid-column: 2;
    background: darkseagreen;
  }
  .grid-area-c {
      grid-row: 2;
      grid-column: 2;
      background:hotpink;
    }
  .grid-area-d {
    grid-row: 3;
    grid-column: 1;
    background:darkolivegreen;
  }
</style>
