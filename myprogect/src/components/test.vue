<template>
    <div class="test">
      <v-header></v-header>
      <h2>{{msg}}</h2>
    </div>
</template>

<script>
  import test2 from './test2'
    export default {
        data () {
          return {
            msg: '组件一号'
          }
        },
      components: {
          'v-header': test2
      }
    }
</script>

<style  scoped>     /*scoped 作用于局部*/
h2{
  color:darkseagreen;
}
</style>
