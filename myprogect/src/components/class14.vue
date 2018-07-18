<template>
    <div class="class14">
      <h2>我是父组件</h2>
      <hr>
      <v-test :father = "father" :run="run":class22="this"></v-test>
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
            msg2: 'information'
          }
        },
        components: {
          'v-test': test
        },
      methods: {
          run (data) {
            alert('父组件方法'+data)
          }
      }
      }
</script>

<style scoped>

</style>
