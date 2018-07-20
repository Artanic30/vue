<template>
    <div class="detail">
      <h2>详细信息</h2>
    </div>
</template>

<script>
    export default {
        data() {
          return {
          }
        },
        mounted () {
          console.log(this.$route.query) //获取动态路由值 //
        }
    }
</script>

<style scoped>

</style>
