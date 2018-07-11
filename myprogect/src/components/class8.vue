<template>
    <div class="class8">
      <input v-model="todo" @keydown="add2($event)">
      <button @click="add">增加</button>
      <br>
      <hr>
      <br>
      <h2>进行中</h2>
      <ul>
        <li v-for=" ( a , key ) in list" v-if='!a.checked'>
          <input type="checkbox" v-model="a.checked">{{key+1}}___{{a.title}}---<button @click="removal(key)">删除</button>
        </li>
      </ul>
       <h2>已完成</h2>
      <ul>
        <li v-for=" ( a , key ) in list" v-if='a.checked'>
          <input type="checkbox" v-model="a.checked">{{key+1}}___{{a.title}}---<button @click="removal(key)">删除</button>
        </li>
      </ul>
      <br>
      <br>
      <hr>
      <button @click="getlist">获取list</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      todo: '',
      list: []
    }
  },
  methods: {
    add () {
      this.list.push({
        title: this.todo,
        checked: false
      })
      this.todo = ''
    },
    removal (key) {
      // alert(key)
      this.list.splice(key, 1)
    },
    getlist () {
      console.log(this.list)
    },
    add2 (e) {
      if( e.keyCode === 13) {
        this.list.push({
          title: this.todo,
          checked: false
        })
        this.todo = ''
      }
    }
  }
}
</script>

<style scoped>

</style>
