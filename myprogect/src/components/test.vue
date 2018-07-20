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
      <br>
      <hr>
       <h2>第一种传值方式</h2>
       <ul>
         <li v-for="(a, key) in list">
           <router-link to="/detail2？aid=123">{{key}}---{{a}}</router-link> <!-- :to绑定动态数据 -->
         </li>
       </ul>
      <br>
      <hr>
      <h2>第二种传值方式</h2>
       <ul>
         <li v-for="(a, key) in list">
           <router-link :to="'/detail2?id='+key">{{key}}---{{a}}</router-link> <!-- :to绑定动态数据 -->
         </li>
       </ul>
    </div>
</template>

<script>
import test2 from './test2'
export default {
  data () {
    return {
      msg: '组件一号',
      list: ['first', 'second', 'third']
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
