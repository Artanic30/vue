<template>
    <div class="test">
      <v-header></v-header>
      <h2>{{msg}}</h2>
      <br>
      <h2>{{father}}</h2>
      <br>
      <button @click="run('student')">父组件方法</button>
      <button @click="getparent">获取父组件值</button>
      <button @click="getparent2">获取父组件的方法与值</button>
    </div>
</template>

<script>
import test2 from './test2'
export default {
  data () {
    return {
      msg: '组件一号'
    }
  },
  components: {
    'v-header': test2
  },
  props:{
    'father':String,
    'run':Function,            /* 判断父组件传入值的形式*/
    'class22':Object
  },


  methods: {
    runchild () {
      alert('子组件的方法')
    },
    getparent () {
      alert(this.class22.msg2)
    },
    getparent2 () {
      alert(this.$parent.msg2)
    }
  }
}
</script>

<style  scoped>     /*scoped 作用于局部*/
h2{
  color:darkseagreen;
}
button {
  background:lightblue;
}
</style>
