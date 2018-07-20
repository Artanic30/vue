<template>
   <div class="class16">
     <h1>动态路由</h1>
     <hr>
     <br>
     <v-test></v-test>
     <hr>
     <v-test2></v-test2>
   </div>
</template>

<script>
  import test from './test'
  import test2 from './test2'
export default {
   data () {
     return {
     }
   },
   components: {
     'v-test': test,
     'v-test2': test2
   },
   mounted () {
     console.log(this.$route.params)
   }
}
</script>

<style scoped>

</style>
