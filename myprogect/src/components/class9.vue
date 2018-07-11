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
          <input type="checkbox" v-model="a.checked" @change="save()">{{key+1}}___{{a.title}}---<button @click="removal(key)">删除</button>
        </li>
      </ul>
       <h2>已完成</h2>
      <ul>
        <li v-for=" ( a , key ) in list" v-if='a.checked'>
          <input type="checkbox" v-model="a.checked" @change="save()">{{key+1}}___{{a.title}}---<button @click="removal(key)">删除</button>
        </li>
      </ul>
      <br>
      <br>
      <hr>
      <button @click="getlist">获取list</button>
    </div>
</template>

<script>
import store from './model/storage.js'
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
      store.set('list', this.list)
    },
    removal (key) {
      // alert(key)
      this.list.splice(key, 1)
      store.set('list', this.list)
    },
    getlist () {
      console.log(this.list)
    },
    add2 (e) {
      if ( e.keyCode === 13) {
        this.list.push({
          title: this.todo,
        checked: false
        })
        this.todo = ''
        store.set('list', this.list)
      }
    },
    save () {
      store.set('list', this.list)
    }
  },
  mounted () {
    var list = store.get('list')
    if (list) {
      this.list = list
    }
  }
}
</script>

<style scoped>

</style>
