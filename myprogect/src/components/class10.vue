<template>
    <div class="class10">
      <v-header></v-header>
      <h2>组件化(引入实验)</h2>
      <br>
      <hr>
     <v-test></v-test>
    </div>
</template>

<script>
import test from './test.vue'
  import test2 from './test2.vue'
export default {
  data () {
          return {}
  },
  components: {
    'v-test':test,
    'v-header':test2
  }
}
</script>

<style scoped>

</style>
