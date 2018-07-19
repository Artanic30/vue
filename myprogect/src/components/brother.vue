<template>
    <div class="brother">
      <h2>我是一个brother</h2>
      <br>
      <button @click="tobrother">给sister传递数据</button>
      <br>
      <input v-model="receipt">
    </div>
</template>

<script>
  import talk from './model/communication'
    export default {
        data () {
          return {
            msg: 'i am brother',
            receipt: ''
          }
        },
      methods: {
          tobrother() {
             talk.$emit('tosister', this.msg)
          }
      },
      mounted () {
       talk.$on('tobrother', function (data) {
        console.log(data)
        this.receipt = data
      }.bind(this))
      }
    }
</script>

<style scoped>

</style>
