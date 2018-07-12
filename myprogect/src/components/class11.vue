<template>
 <div class="class11">
   <h1>{{msg}}</h1>
   <br>
    <hr>
     <v-test v-if="flag"></v-test>
     <button @click="flag=!flag">挂在卸载组件</button>
   <br>
   <br>
   <button @click="change" v-if="apple">{{msg}}</button>  /* update过程演示 */
 </div>
</template>

<script>
import test from './test'
export default {
  data () {
    return {
      msg: '生命周期演示',
      apple: true,
      flag: true
    }
  },
  components: {
    'v-test': test
  },
  beforeCreate () {
    console.log('组建创建之前')
  },
  created () {
    console.log('组建创建之后')
  },
  beforeMount () {
    console.log('数据运算之前')
  },
  beforeUpdate () {
    console.log('数据改变后跟新之前')
  },
  updated () {
    console.log('数据跟新之后')
  },
  mounted () {
    console.log('数据运算之后')
  },
  beforeDestroy () {
    console.log('数据摧毁之前')
  },
  destroyed () {
    console.log('数据摧毁之后')
  },
  methods: {
    change () {
      this.apple = !this.apple
    }
  }
}
</script>

<style scoped>

</style>
