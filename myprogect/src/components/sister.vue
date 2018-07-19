<template>
    <div class="sister">
      <h2>我是一个sister</h2>
      <br>
       <button @click="tosister">给brother传递数据</button>
      <br>
      <input v-model="receipt">
    </div>
</template>

<script>
  import talk from './model/communication'
    export default {
      data() {
        return {
          receipt: '',
          msg: 'i sm sister'
        }
      },
      mounted () {
        talk.$on('tosister', function (data) {
        console.log(data)
        this.receipt = data
      }.bind(this))    //加入.bind(this)
       // https://www.cnblogs.com/sunsanfeng/p/emit.html//
      },
      methods: {
        tosister () {
           talk.$emit('tobrother', this.msg)
        }
      }
   }
</script>

<style scoped>

</style>
