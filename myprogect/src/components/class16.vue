<template>
   <div class="class16">
     <h1>非父子组件通讯</h1>
     <hr>
     <br>
     <v-sister></v-sister>
     <hr>
     <v-brother></v-brother>
   </div>
</template>

<script>
  import sister from './sister'
  import brother from './brother'
export default {
   data () {
     return {
     }
   } ,
  components: {
     'v-sister': sister,
     'v-brother': brother
  }
    }
</script>

<style scoped>

</style>
