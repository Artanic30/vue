<template>
    <div class="class5">
      <div>{{msg}}</div>
     <hr>
      <input type="text" v-model="msg" >
      <button @click="getvalue">显示登记数值</button>
     <hr>
      <input type="text" v-model="msg">
      <button @click="changevalue">改变登记数值</button>
      <hr>
      <input type="text" ref="information" v-model="info" >
       <button ref ="annie" @click="evlove">ref用法</button>
      <button ref ="jack" @click="extinction">output</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'defult value',
      info: ''
    }
  },
  methods: {
    getvalue () {
      alert(this.msg)
    },
    changevalue () {
      this.msg = 'updated value'
    },
    evlove () {
      this.info = 'civilization'
      this.$refs.annie.style.background = 'red'
      alert(this.$refs.information.value)
    },
    extinction () {
      console.log(this.$refs.information)
      alert(this.$refs.information.value)
    }
  }
}
</script>

<style scoped>

</style>
