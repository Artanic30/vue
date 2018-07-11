<template>
    <div class="class7">
      <input v-model="todo">
      <button @click="add">增加</button>
      <br>
      <hr>
      <br>
      <ul>
        <li v-for=" ( a , key ) in list">{{a}}----<button @click="removal(key)">删除</button>
        </li>
      </ul>
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
      this.list.push(this.todo)
      this.todo = ''
    },
    removal (key) {
      // alert(key)
      this.list.splice(key, 1)
    }
  }
}
</script>

<style scoped>

</style>
