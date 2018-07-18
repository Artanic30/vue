<template>
    <div class="class15">
      <h2>我是父组件</h2>
      <hr>

      <v-test :father = "father" :run="run":class22="this" ref="testpart"></v-test>
       <!-- :father = "father" :run="run":class22="this"-->
      <hr>
      <br>
     <input v-model="box">
      <br>
     <!-- <h2>{{this.$refs.testpart.msg}}</h2> 无法显示?solution：转换方法显示-->
      <button @click="getchild">获取子组件数据</button>
      <br>
      <button @click="getchild2">获取子组件方法</button>
      <hr>
      <h2>END</h2>
    </div>
</template>

<script>
  import test from './test'
    export default {
        data () {
          return {
            father: 'GODfather',
            msg2: 'information',
            box: ''
          }
        },
        components: {
          'v-test': test
        },
      methods: {
          run (data) {
            alert('父组件方法'+data)
          },
        getchild () {
            alert(this.$refs.testpart.msg +'将此值赋予box')
             this.box = this.$refs.testpart.msg
        },
        getchild2 () {
            this.$refs.testpart.runchild()    /* ()不能省略 */
        }
      }
      }
</script>

<style scoped>
button {
  background:lightblue;
}
h2{
  color:darkcyan;
}
</style>
