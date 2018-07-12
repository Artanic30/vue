<template>
  <div class="hello">
    <button @click="turn" title="hello world">{{msg}}</button>
    <br>
    <a href="http://localhost:8080/#/class3">class3</a>
    <br>
    <a href="http://localhost:8080/#/class4">class4</a><br>
    <a href="http://localhost:8080/#/class5">class5</a><br>
    <a href="http://localhost:8080/#/class6">class6</a><br>
    <a href="http://localhost:8080/#/class7">class7</a><br>
    <a href="http://localhost:8080/#/class8">class8</a><br>
    <a href="http://localhost:8080/#/class9">class9</a><br>
    <a href="http://localhost:8080/#/class10">class10</a><br>
    <a href="http://localhost:8080/#/class11">class11</a><br>
    <a href="http://localhost:8080/#/class12">class12</a><br>
  </div>
</template>

<script>
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
  a {
    color:deepskyblue;
    background: dimgray;
  }
</style>
