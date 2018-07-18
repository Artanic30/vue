<template>
    <div class="test2">
      <h2>{{msg}}</h2>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我来组成头部'
    }
  }
}
</script>

<style  scoped>     /*scoped 作用于局部*/
h2{
  color:lightcoral;
}
</style>
