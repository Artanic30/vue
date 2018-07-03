<template>
    <div class="class6">
     <input type="text" v-model="msg">
      <br>
     <button @click="get">显示{{msg}}</button>
      <hr>
      <br>
      <br>
      <button @click="set">改变{{msg}}</button>
      <hr>
      <br>
      <ul>
        <button @click="daniel">recruit</button>
        <button @click="clean">clean</button>
        <li v-for="(a,key) in list">{{key}}____{{a}}
        </li>
      </ul>
      <br>
      <hr>
      <button @click="sia('222')">输出222</button>
      <br>
      <br>
      <hr>
      <button data-aid='123' ref="lalala" @click="event('phoenix')">console controller</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'vue.js',
      list: []
    }
  },
  methods: {
    get () {
      alert(this.msg + 'alakahuba')
    },
    set () {
      this.msg = 'node.js'
      alert(this.msg + 'ankahahuba')
    },
    daniel () {
      for (var i = 1; i < 11; i++) {
        this.list.push('我是第' + i + '代圣堂武士')
      }
    },
    clean () {
      this.list = []
    },
    sia (value) {
      alert(value)
    },
    event (a) {
      console.log(a)
      // console.log(a.srcElement.dataset.aid)
      this.$refs.lalala.style.background = 'red'
    }
  }
}
</script>

<style scoped>

</style>
