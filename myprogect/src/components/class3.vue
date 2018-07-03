<template>
  <div class="class3">
    <h2>{{msg}}</h2>
    <br/>
    <hr>
    <br/>
    <ul>
      <li v-for="a in list">{{a}}
      </li>
    </ul>
    <hr>
    <ul>
      <li v-for=" b in list1">{{b.title}}</li>
    </ul>
    <hr>
    <ul>
      <li v-for=" c in list2 ">{{c.define}}
      </li>

    </ul>
    <hr>
    <br>
    <ul>
      <li v-for=" d in list2 ">{{d.state}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '第一节课',
      list: ['first', 'second', 'third'],
      list1: [
        {title: 'first'},
        {title: 'second'},
        {title: 'third'}
      ],
      list2: [
        {
          define: 'number1',
          state: 'one'
        },
        {
          define: 'number2',
          state: 'two'
        },
        {
          define: 'number3',
          state: 'three'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
